const path = require('path');
const CONFIG = require('./config.js');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: `${CONFIG.js}[name].js?[hash:8]`,
  },
  module: {
    rules: [
      {
        // *.vue
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        // `*.vue` 檔案中的 `<style>` 塊以及普通的`*.css`
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.postcss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        // 圖片
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 25000,
            name: '[path][name].[ext]?[hash:8]'
          },
        },
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },
      {
        // *.js
        test: /\.js$/,
        exclude: /node_modules/, // 不編譯node_modules下的檔案
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html', // 生成的資料夾名
      template: 'public/index.html', // 模板html
      favicon: 'public/favicon.ico', // 圖示
    }),
  ],
  resolve: {
    // 設定src別名
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    //字尾名 可以根據需要自由增減
    extensions: ['.js', '.vue'],
  },
  devServer: {
    // contentBase: path.join(__dirname, 'dist'), // html所在路徑
    compress: true, // 是否壓縮
    port: 3000, // 埠
    hot: true, // 熱部署
    open: true, // 打包完成後自動開啟網頁
  }
};
module.exports = config;