const path = require("path")

const config = {}

config.entry = "./src/index.js"
config.target = "node"

config.node = {
  console: true,
  global: true,
  process: false,
  Buffer: false,
  __filename: false,
  __dirname: false,
}

config.output = {
  path: path.join(__dirname, 'build'),
  filename: '[name].js',
}

config.resolve = {
  extensions: [ '', '.js'],
}

config.module = {}

config.module.loaders = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/syntax-dynamic-import']
        }
      }
  }
]

module.exports = config;