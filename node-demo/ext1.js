// 默认情况下 exports和module.exports是同一个对象
console.log(exports === module.exports);

// 在一个模块文件内不要随便将赋值符应用到exports或module.exports或module
// 赋值符使得exports指向新的对象 exports和module.exports将不再是同一个对象
// 也不要同时使用exports和module.exports
exports.a = 3;
exports.b = 5;
exports.r = 23;

console.log(exports === module.exports);
// console.log(module.id);
// console.log(module.path);
// console.log(module.filename);
// console.log(module.loaded);
// console.log(module.children);
// console.log(module.paths);
// console.log(exports);
// console.log(module.exports);
console.log(exports === module.exports);
// 最终外部能使用的一定是module.exports
console.log(module);