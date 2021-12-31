// -------------------------------------------fs
const fs = require('fs');

// 异步读文件
// fs.readFile('../myfile/gobelieve-app-img.jpg', 'binary', (err, data) => {
//     if (err) {
//         console.log(err.message)
//     }
//     console.log(data);
// });

// 异步写文件
// fs.writeFile('../myfile/a.txt', '234wrwer', (err) => {
//     if (err) {
//         console.log(err.message);
//     }
// });

// -------------------------------------------path
const path = require('path');

const fpath = '/data/doc/1.jpeg';
console.log("文件目录", path.dirname(fpath));
console.log("文件名", path.basename(fpath));
console.log("文件扩展名", path.extname(fpath));
console.log("文件名(无后缀)", path.basename(fpath, path.extname(fpath)));
console.log("当前执行文件所在路径", __dirname);
console.log("当前执行文件全路径", __filename);
console.log("文件全路径", path.resolve(__dirname, 'index.js'));
console.log("文件全路径", path.join(__dirname, 'index.js'));

// 规范文件路径 按层级逻辑输出完整的路径
// . 当前路径 ..上层路径 /路径分隔符 \转义符
console.log(path.normalize("234/5/7342/../yty/667/./655/5454ft/"));
// 将多个路径连接成一个路径 按层级逻辑输出
console.log(path.join("data/234/..", "./data/5", "3/../42"));

console.log("文件路径分隔符", path.sep);
console.log("系统分隔符", path.delimiter);

// -------------------------------------------时间API moment
const moment = require('moment');
const dt = moment().format('YYYY-MM-DD HH:mm:ss');
console.log(dt);

// ------------------------------------------- 自定义包
// 1.在当前目录下寻找ext.js
// 2.如果上一步完成则结束 如果不成功则寻找ext文件夹下package.json的main属性指定的入口文件
const ext = require('./test');
console.log(ext.fnt3());
