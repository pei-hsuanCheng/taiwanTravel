const PATH = require('path');
const CONFIG = require('./config.js');
const MINiCSSEXTRACTPLUGIN = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const IMAGEMINIMIZERPLUGIN = require('image-minimizer-webpack-plugin');
const { extendDefaultPlugins } = require('svgo');

const config = {
  entry: './src/main.js',
  output: {
    path: PATH.resolve(__dirname + '/dist'),
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
        use: [
          {
            loader: MINiCSSEXTRACTPLUGIN.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return (PATH.relative(PATH.dirname(resourcePath), context).replace(/\\/g, '/')) + '/';
              }
            }
          },
          'css-loader',
          'postcss-loader'
        ],
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
        test: /\.(jpe?g|png|svg|cur)$/i,
        type: 'asset/resource',
        include: PATH.resolve(__dirname, `src/${CONFIG.imgs}`),
        generator: {
          filename: '[path][name][ext]?[hash:8]'
        },
        use: [
          {
            loader: IMAGEMINIMIZERPLUGIN.loader,
            options: {
              minimizerOptions: {
                plugins: [
                  ['jpegtran', {
                    progressive: true,
                    quality: 75
                  }],
                  ['pngquant', {
                    quality: [0.60, 0.75],
                    speed: 4
                  }],
                  ['svgo', {
                    plugins: extendDefaultPlugins([{
                      name: 'removeViewBox',
                      active: false
                    }])
                  }]
                ]
              }
            }
          }
        ]
      }, {
        test: /\.(jpe?g|png)$/i,
        use: [
          {
            loader: IMAGEMINIMIZERPLUGIN.loader,
            options: {
              deleteOriginalAssets: false,
              filename: '[path][name].webp?[hash:8]',
              minimizerOptions: {
                plugins: [
                  ['webp', {
                    quality: 88
                  }]
                ]
              }
            }
          }
        ]
      }, {
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
    new MINiCSSEXTRACTPLUGIN({
      filename: (CONFIG.css + '[name].css?[hash:8]')
    }),
  ],
  resolve: {
    // 設定src別名
    alias: {
      '@': PATH.resolve(__dirname, 'src'),
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