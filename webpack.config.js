const path = require('path');
module.exports = {
  entry: ['./src/javascript.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'javascript.js',
    libraryTarget: 'var',
    library: 'ChromeShadowFixer'
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
