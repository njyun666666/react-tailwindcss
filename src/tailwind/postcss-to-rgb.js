const { parseColor } = require('tailwindcss/lib/util/color');
const toRGB = (value) => parseColor(value).color.join(',');

/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = (opts = {}) => {
  return {
    postcssPlugin: 'postcss-to-rgb',

    Declaration(decl, postcss) {
      if (!decl.value || decl.value.indexOf('toRGB(') === -1) {
        return;
      }

      const value = decl.value.replace('toRGB(', '').replace(')', '');
      decl.value = toRGB(value);
    },
  };
};

module.exports.postcss = true;
