/* 数组 */

// 1.创建数组
let arr = new Array();
arr = [];

// 2.添加修改数据
arr[0] = '3535dfgsdg';
arr[1] = 'vdvsjk2';
// 3.删除数据 按索引删除 但是这种删除方法只是把对应索引改为undefined
delete arr[0];

// 4.会影响到数组的方法
// (push pop unshift shift splice sort reverse)
// push 向数组末尾添加元素
arr.push('5s', 'dgs', 'sdagedg');
// pop 删除最后一个元素 并返回该元素
let a1 = arr.pop();
console.log(a1);
// unshift 向数组开头添加元素
arr.unshift('zcsf', '34ag', 'bsd');
// shift 删除第一个元素 并返回该元素
a1 = arr.shift();
console.log(a1);
// splice 按索引删除或添加数据
// 从索引为0的位置(包括0)开始删除1个元素并在0的位置前一位添加新元素'vsf','rfs'
// 同时将被删除的元素以一个新数组的形式返回
a1 = arr.splice(0, 1, 'vsf', 'rfs');
console.log(a1);
// sort 默认按照数据的unicode编码排序
// 可以传入一个回调函数自定义排序规则
// a 是第一个元素 b是a之后的一个元素
// 返回true则调转ab的位置 返回false则不变
a1 = arr.sort((a, b) => {
    return a - b;
});
console.log(a1);
// reverse 反转数组
a1 = arr.reverse();
console.log(a1);


// 5.不会影响到数组的方法
// (slice join concat)
// slice按索引截取数组的数据
// 截取从索引为0(包括0)开始到索引为4(不包括4,可以不指定默认表示最后一位)的 数据并返回一个新的数组
a1 = arr.slice(0, 4);
console.log(a1);
// join 将数组内的数据按索引顺序连接成一个字符串(以此调用各个数据的toString方法)
// 默认使用,分割 可以指定一个分隔符有
a1 = arr.join('....');
console.log(a1);
// concat 连接多个数组并返回一个新的数组
let arr1 = [4, 3, 7, 2, 74, 6];
arr.concat(arr1, [4, 8, 4, 'rhf', 4, 'ey4']);



// 6.数组的遍历
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let v in arr) {
//     console.log(arr[v]);
// }

// for (let v of arr) {
//     console.log(v);
// }

// val当前正在遍历的数据
// idx当前正在遍历的数据的索引
// arr1遍历的数组
arr.forEach((val, idx, arr1) => {
    console.log(val, idx, arr1)
})

const _type = typeof arr;
console.log(typeof _type, _type, arr, arr.length);