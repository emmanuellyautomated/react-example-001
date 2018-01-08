const path = require('path');
 
module.exports = {
  context: path.join(__dirname, 'source'),
  entry: [
    './app.jsx',
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
    extensions: ['.js', '.jsx']
  },
};
