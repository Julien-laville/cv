module.exports = () => {
  return {
    entry : `${__dirname}/src/index.jsx`,
    output: { path: `${__dirname}/public/`, filename: 'bundle.js' },
    module: {
      rules: [
        {
          test: /.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['@babel/react']
          }
        }
      ]
    },
    devtool: 'source-map'
  }
}
