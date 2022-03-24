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
        target: 'http://127.0.0.1:7132',
        ws: false,
        changeOrigin: false,
        pathRewrite: {
          '^/a80': ''
        }
      },
      '/mid': {
        target: 'http://8.136.146.58:8081/middle',
        ws: false,
        pathRewrite: {
          '^/mid': ''
        }
      },
      '/admin': {
        target: 'http://8.136.146.58:8082/admin',
        ws: false,
        pathRewrite: {
          '^/admin': ''
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