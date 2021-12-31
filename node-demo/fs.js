const fs = require('fs');

// 异步读文件
// fs.readFile('../myfile/gobelieve-app-img.jpg', 'binary', (err, data) => {
//     if (err) {
//         console.log(err.message)
//     }
//     console.log(data);
// });

// 异步写文件
fs.writeFile('../myfile/a.txt', '234wrwer', (err) => {
    if (err) {
        console.log(err.message);
    }
});