module.exports = {
  style: {
    postcss: {
      loaderOptions: (postcssLoaderOptions) => {
        postcssLoaderOptions.postcssOptions.plugins = [
          require('postcss-import'),
          require('postcss-each')({
            plugins: {
              afterEach: [require('postcss-at-rules-variables')],
            },
          }),
          require('./src/tailwind/postcss-to-rgb'),
          require('tailwindcss/nesting'),
          require('tailwindcss'),
          'postcss-flexbugs-fixes',
          [
            'postcss-preset-env',
            {
              autoprefixer: {
                flexbox: 'no-2009',
              },
              stage: 3,
            },
          ],
        ];

        return postcssLoaderOptions;
      },
    },
  },
};
