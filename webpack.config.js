const path = require('path');
module.exports = {
  entry: './src/javascript.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      loader: 'babel-loader'
    }]
  }
};
