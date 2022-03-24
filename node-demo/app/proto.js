/* 原型对象 */
// 任何对象和函数都有其原型对象 prototype
// 任何变量和实例都有其原型 __proto__
// 变量或实例的原型 __proto__ 就是其构造函数的原型对象
// null和undefined没有原型 __proto__
// v.__proto__ === V.prototype
// 实例的公共属性和公共方法可以都放在原型对象上 节约资源

/* 原型链 */
// 对象的原型对象仍有其原型对象
// 当使用对象的某属性时,会顺着原型链逐层查找该属性
// 直到查找到null为止

let v = 6;

v = '43';
v = new String('gs');
v = null;


function Fnt() {

}

v = new Fnt()

const _proto = v.__proto__;
console.log(_proto, v)

const _pt = Fnt.prototype;
console.log(_proto === _pt, _pt.__proto__);