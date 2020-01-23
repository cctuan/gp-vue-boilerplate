
import rimraf from 'rimraf';
import fs from 'fs';
import path from 'path';

export function getHTMLFromTags (tags) {
  return tags.map(tag => {
    const options = tag.options || {};
    const props = (Object.keys(options.props || {})).reduce((result, prop) => {
      const value = options.props[String(prop)];
      if (value) {
        result.push(`${prop}="${value}"`);
      }
      return result;
    }, [
      ''
    ]);
    return `<${tag.name}${props.join(' ')}></${tag.name}>`;
  });
}

// Files

export function readFile (filepath) {
  return new Promise(resolve => {
    fs.readFile(filepath, 'utf8', function (err, data) {
      if (err) {
        throw err;
      }
      resolve(data);
    });
  });
}

export function writeDir (filepath) {
  return new Promise(resolve => {
    if (fs.existsSync(filepath)) {
      resolve();
      return;
    }
    fs.mkdir(filepath, {
      recursive: true
    }, (err) => {
      if (err) {
        throw err;
      }
      resolve();
    });
  });
}

export function writeFile (filepath, content) {
  return new Promise(resolve => {
    fs.writeFile(filepath, content, 'utf-8', (err) => {
      if (err) {
        throw err;
      }
      resolve();
    });
  });
}

export function cleanDir (filePath) {
  filePath = path.join(filePath, '**/*');
  console.log('rimraf', filePath);
  return new Promise(resolve => {
    rimraf(filePath, {}, resolve);
  });
}

export function getBuildHook (generate) {
  if (generate) {
    return 'generate:done';
  } else {
    return 'build:done';
  }
}

export const DEFAULT_CUSTOM_ELEMENT_OPTIONS = {
  shadow: false
};

export function prepareTags (tags) {
  return tags.reduce((result, tag, i) => {
    result.imports.push(`import Component${i} from '${tag.path}'\n`);
    result.creates.push(`Vue.customElement('${tag.name}', Component${i}, ${JSON.stringify(Object.assign({}, DEFAULT_CUSTOM_ELEMENT_OPTIONS, (tag.options || {})))});\n`);
    return result;
  }, {
    imports: [],
    creates: []
  });
}
