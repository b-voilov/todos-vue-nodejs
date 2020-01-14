const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
module.exports = {
    "transpileDependencies": ["vuetify"],
    configureWebpack: {

      plugins: [
        new webpack.LoaderOptionsPlugin({
          test: /\.css$/i,
          options: {
            rules: {
              use: ['to-string-loader', 'css-loader'],
            }
          }
        }),
          new CompressionPlugin(),
      ]
    }
}


