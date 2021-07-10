module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:4040/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  outputDir: '../backend/src/public'
}
