const path = require('path');
var basePath = __dirname;

module.exports = {
  context: path.join(basePath, 'src'),

  //entry: path.join(__dirname, './app.ts'),
  entry : {
    app : './app.ts'
  },
  output: {
    filename: 'app.js',
    path: __dirname
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
};