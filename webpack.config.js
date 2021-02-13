const path = require('path');

module.exports = {
  entry: "./webpack/entry.js",
  output: {
    path: path.resolve(__dirname + '/src/assets/javascripts'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  mode: 'production'
};