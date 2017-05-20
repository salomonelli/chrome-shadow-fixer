const path = require('path');
module.exports = {
  entry: ['babel-polyfill', './src/javascript.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      options: {
        'presets': ['es2015']
      }
    }]
  }
};
