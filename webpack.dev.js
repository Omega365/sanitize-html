const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'main.js',
    library: 'SanitizeHTML',
    path: path.resolve(__dirname, 'dist'),
    pathinfo: false
  },
};