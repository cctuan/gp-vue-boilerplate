import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { getHTMLFromTags, getBuildHook, readFile, cleanDir, writeFile, prepareTags } from './utils';
import { writeDir } from '../nuxt-virtual-content/utils/index';

const MODULE_NAME = 'nuxt-generate-custom-component';
const BUILD_DIR = MODULE_NAME;
const PATH_CACHE_DIR = path.join(process.cwd(), '.tmp', MODULE_NAME);
const DEFAULT_FILENAME = 'custom-component';

module.exports = function (options) {

  options = Object.assign({
    filename: DEFAULT_FILENAME,
    // Wenn gesetzt wird für jeden Custom-Tag eine eigene JS Datei erzeugt.
    splitJSEntries: false,
    tags: []
  }, options);

  const dist = options.buildDist || path.join(this.nuxt.options.generate.dir, BUILD_DIR);
  const hasGenericDist = !options.buildDist;

  this.extendBuild((config, { isClient }) => {

    if (!isClient) {
      return;
    }

    const pluginExcludes = [
      'VueSSRClientPlugin', 'HtmlWebpackPlugin', 'CorsPlugin'//, 'ModernModePlugin'
    ];

    const plugins = config.plugins.reduce((result, plugin) => {
      if (!pluginExcludes.includes(plugin.constructor.name)) {
        result.push(plugin);
      }
      return result;
    }, []);

    // preview index
    plugins.unshift(new HtmlWebpackPlugin({
      template: path.join(__dirname, 'tmpl/index.html'),
      templateParameters: (compilation, assets, assetTags) => {
        return {
          htmlWebpackPlugin: {
            tags: assetTags,
            files: assets,
            options: {
              title: assetTags.title
            }
          },
          tags: getHTMLFromTags(options.tags)
        };
      },
      // minify: this.nuxt.options.build.html.minify,
      // inject: false // Resources will be injected using bundleRenderer
    }));

    const webpackConfig = Object.assign({}, config, {
      target: 'web',
      output: {
        path: dist,
        filename: '[name].js',
        publicPath: options.publicPath
      },
      optimization: {
        runtimeChunk: false
      },
      plugins
    });

    /*
        const webpackConfig = {
          target: 'web',
          mode: config.mode,

          module: Object.assign({}, config.module),

          output: Object.assign({}, config.output, {
            path: dist,
            filename: '[name].js',
            publicPath: options.publicPath
          }),

          optimization: Object.assign({}, config.optimization, { runtimeChunk: false }),
          plugins,
          resolve: Object.assign({}, config.resolve),
          resolveLoader: Object.assign({}, config.resolveLoader)
        };
    */
    this.nuxt.hook(getBuildHook(hasGenericDist), async () => {

      const template = await readFile(path.join(__dirname, 'tmpl', 'entry.js'));

      const preparedTags = prepareTags(options.tags);

      if (!hasGenericDist) {
        await cleanDir(dist);
      }

      await Promise.all([
        // create cache directory
        writeDir(PATH_CACHE_DIR),
      ]);

      const entry = {};
      if (options.splitJSEntries) {
        await Promise.all(options.tags.map((tag, i) => {
          const filePath = path.join(PATH_CACHE_DIR, `${tag.name}.js`);
          entry[String(tag.name)] = filePath;
          return writeFile(filePath, template
            .replace('/* PLACEHOLDER_IMPORTS */', preparedTags.imports[Number(i)])
            .replace('/* PLACEHOLDER_CUSTOMELEMENT_CREATE */', preparedTags.creates[Number(i)])
          );
        }));
      } else {
        const filePath = path.join(PATH_CACHE_DIR, `${options.filename}.js`);
        entry[String(DEFAULT_FILENAME)] = filePath;
        await writeFile(filePath, template
          .replace('/* PLACEHOLDER_IMPORTS */', preparedTags.imports.join(''))
          .replace('/* PLACEHOLDER_CUSTOMELEMENT_CREATE */', preparedTags.creates.join(''))
        );
      }
      webpackConfig.entry = entry;

      // console.log(webpackConfig);
      return new Promise(resolve => {
        webpack(webpackConfig, (err, stats) => {

          console.log(stats.toJson().entrypoints['custom-element'].assets);
          stats.compilation.errors.forEach(error => console.error(error));

          if (err || stats.hasErrors()) {
            throw err;
          }
          resolve();
        });
      });

    });
  });

};
