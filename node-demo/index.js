console.log('hello world');

const path = require('path');

// let v = process.env;
// console.log(process);
// console.log(v);
// console.log(process.argv);

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