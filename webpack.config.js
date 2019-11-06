const path = require('path')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  
  // setting for start
  entry: {
    app: path.join(__dirname, 'src', 'main.js')
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin()
  ],

  // setting for end
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist')
  }
}