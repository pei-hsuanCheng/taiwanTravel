const CONFIG = require('./config.js');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-each'),
    require('postcss-css-variables'),
    require('postcss-calc'),
    require('postcss-nested'),
    require('postcss-hexrgba'),
    require('postcss-pxtorem')({
      propList: ['*', '!box-shadow', '!text-shadow']
    }),
    require('postcss-assets')({
      loadPaths: [`src/${CONFIG.imgs}`, `src/${CONFIG.svgs}`]
    }),
    tailwindcss,
    autoprefixer({
      grid: true,
      overrideBrowserslist: [
        '> 1%',
        'last 5 versions',
        'Firefox >= 45',
        'ios >= 8',
        'ie >= 10'
      ]
    })
  ],
};