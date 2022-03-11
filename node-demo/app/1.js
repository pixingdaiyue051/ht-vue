let param = 0;
// param = Infinity
// param = -Infinity
// param = NaN;

// param = '24.14ff4';

// param = true;

param = {};
param = null;

param = undefined;

// param = param.toString();
// param = String(param);

// param = Number(param);
// param = parseInt(param);
// param = parseFloat(param);
param = Boolean(param);

const _type = typeof param;
console.log(typeof _type, _type, param);

console.log('\u2654');

let a = 333;
let b = a;
a = 4 // b不会改变
console.log(a, b); // true

let o1 = new Object();
let o2 = o1;
console.log(o1, o2, o1 === o2);
o1.id = 322; // o2也会改变
console.log(o1, o2, o1 === o2);
o2.name = '322'; // o1也会改变
console.log(o1, o2, o1 === o2);
o1 = { id: 422 }; // o2不会改变
console.log(o1, o2, o1 === o2);

let obj = {};
let arr = [];
let fnt = function () { };
let str = 'fffgg';
let num = 0;
console.log('obj', obj, obj.__proto__);
console.log('arr', arr, arr.__proto__);
console.log('fnt', obj, obj.__proto__);
console.log('str', str, str.__proto__);
console.log('num', num, num.__proto__);

console.log(Math.SQRT1_2);