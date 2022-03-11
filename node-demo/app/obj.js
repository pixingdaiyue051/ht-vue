/* 构造函数创建对象 */
let obj = new Object();
/* 添加或修改属性 属性可以是任何类型数据 包括对象和函数 */
obj.n = 91;
obj.m = '3dfd12';
obj['k'] = 'sdff43';

// 删除对象的属性 没有该属性也不报错
delete obj.m;
delete obj['m3'];

// 使用对象的属性 没有该属性则undefined
console.log(obj.k, obj['n'], obj.t);
// 遍历查看对象内的全部属性
for (let v in obj) {
    console.log(v, obj[v]);
}

// 检查obj是否有n这个属性
console.log("n" in obj);
// 检查obj本身是否有n这个属性
console.log(obj.hasOwnProperty("n"));

// 浏览器内置对象window
// 所有声明变量 对象 函数都是window的属性
// console.log(window)

// const _type = typeof obj;
// console.log(typeof _type, _type, obj);