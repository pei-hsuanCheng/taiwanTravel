const tailwindcss = require('tailwindcss');
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
    tailwindcss
  ],
};