const px2rem = require('postcss-px2rem')

const postcss = px2rem({
  remUnit: 75   //基准大小 baseSize，需要和rem.js中相同
})

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
 
},
module.exports = {
  devServer: {
    proxy: {
      '/api': { // 匹配所有以 '/api'开头的请求路径
        target: 'https://m.you.163.com', // 代理目标的基础路径
        changeOrigin: true, // 支持跨域
        pathRewrite: { 
          '^/api': ''
        }
      },
    }
    
  }
}


