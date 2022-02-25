// vue.config.js是一个可选的配置文件
// 也可以改为在package.json中增加vue字段
module.exports = {
  pages: {
    index: {
      // 入口js
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html'
    }
  },
  devServer: {
    // 访问域名
    // host: 'eee222',
    // 开启时的访问端口
    // port: 8089,
    // 开启代理服务器
    proxy: {
      // '/aws': {
      //   target: 'http://localhost/wsapp',
      //   ws: true, // 支持提升为websocket请求 默认true
      //   changeOrigin: true, // 改成虚拟请求host 以配合与服务器host一致 默认true
      //   pathRewrite: {
      //     '^/aws': ''
      //   }
      // },
      '/a80': {
        target: 'http://localhost:8510/boot',
        ws: false,
        changeOrigin: false,
        pathRewrite: {
          '^/a80': ''
        }
      },
      '/a81': {
        target: 'http://localhost:8081/boot',
        ws: false,
        pathRewrite: {
          '^/a81': ''
        }
      }
    }
  }
}
// "vue": {
//   "pages": {
//     "index": {
//       "entry": "src/main2.js"
//     }
//   }
// }