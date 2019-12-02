import VirtualModule from 'webpack-virtual-modules';
import path from 'upath';
import { getShortName } from '../utils';

const PLUGIN_NAME = 'VirtualLocales';

export default class VirtualLocales extends VirtualModule {
  constructor(options, routes = []) {
    super();

    this.routes = routes;
    this.options = Object.assign({ componentPrefix: 'virtual' }, options);

  }

  apply (compiler) {
    super.apply(compiler);
    compiler.hooks.compilation.tap(PLUGIN_NAME, onCompilation(this));
  }

}

function onCompilation (virtualModule) {
  return () => {

    const routes = virtualModule.routes;

    routes.forEach(route => {
      Object.keys(route.data).forEach(locale => {
        let data = route.data[String(locale)];

        /**
         * Componenten Namen brauchen alle einen Prefix Example: TextImage -> virtualTextImage
         */
        data = JSON.parse(JSON.stringify(data)); // clone
        data = prefixComponentNames(virtualModule.options.componentPrefix, data);

        if (/\/$/.test(data.url)) {
          data.url += 'index';
        }

        const name = data.url
          // remove dynamic param
          .replace(/(.*)\/:.*?$/, '$1');

        virtualModule.writeModule(
          path.join('src/virtual-locales', locale, `${name}.json`),
          JSON.stringify(data)
        );

      });
    });
  };
}

function prefixComponentNames (prefix, pageData) {
  const components = pageData.components;
  for (let i = 0; i < components.length; i++) {
    const component = components[Number(i)];
    component.component = getShortName(prefix, component.component);
  }
  return pageData;
}
