const path = require('path')

module.exports = {
  // setting for start
  entry: {
    app: path.join(__dirname, 'src', 'main.js')
  },

  module: {},

  plugins: [],

  // setting for end
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist')
  }
}