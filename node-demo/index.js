console.log('hello world');

// let v = process.env;
// console.log(process);
// console.log(v);
// console.log(process.argv);

let path = require('path');
console.log("文件目录", path.dirname('/data/doc/1.jpeg'));
console.log("文件全路径", path.basename('/data/doc/1.jpeg'));
console.log("文件扩展名", path.extname('/data/doc/1.jpeg'));
console.log("index绝对路径", path.resolve(__dirname, 'index.js'));

console.log(path.normalize("234", "/data/5", "342"));
console.log(path.join("/data/234", "/data/5", "342", path.delimiter));

console.log(path.sep, path.delimiter);


// let fs = window.require('fs');
// fs.readfile("/data/doc/1.txt", (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString)
// });

let e1 = require('ext1');
console.log(e1);