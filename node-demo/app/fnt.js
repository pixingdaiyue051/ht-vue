// /* 构造函数 */
// // 通过字符串传入逻辑代码
// let fnt = new Function("console.log('构造函数');");
// // 此时fnt类型是函数 可以执行
// fnt();
// // 创建函数并立马执行一次且只能执行这一次
// // 此时fnt是函数返回值 不一定可以再执行
// fnt = new Function("console.log('test 构造函数')")();

// /* 匿名函数 */
// // 需要用变量接收
// fnt = function () {
//     console.log('变量接收匿名函数');
// };
// // 此时fnt类型是函数 可以执行
// fnt();
// // 创建匿名函数并立马执行一次且只能执行这一次
// // 此时fnt是函数返回值 不一定可以再执行
// fnt = function () {
//     console.log('test 变量接收匿名函数');
// }();
// // 匿名函数如果不需要接收返回值可以使用括号将其包裹写成变成表达式
// // 表达式形式的匿名函数可以立即执行一次且只会执行这一次
// (function () {
//     console.log('test 表达式匿名函数');
// }());

// 匿名函数闭包
// let add = function () {
//     let counter = 0;
//     return function () {return counter += 1;}
// }();

// console.log(add());
// console.log(add());
// console.log(add());

// const _type = typeof fnt;
// console.log(typeof _type, _type, fnt);

// /* 声明式函数 */
// // 使用变量接收一个声明函数
// fnt = function fnt2(a, b) {
//     console.log('test 声明式函数', a, b);
// }
// // 此时fnt类型是函数 可以执行 不过fnt2已不可以用
// fnt();
// // 声明函数立即执行一次且只会执行这一次
// // 此时fnt是函数返回值 不一定可以再执行
// fnt = function fnt2(a, b) {
//     console.log('test 声明式函数', a, b);
// }();

// 声明两个形参 相当于在函数体内声明了两个变量 但不赋值 所以初始化都是undefined
// 函数内使用return 返回结果(可以式任意类型) 如果没有return则默认返回undefined
function fnt1(a, b) {
    // 函数类会有this指向函数调用方
    // arguments指向实参列表对象(全部参数)
    console.log('声明式函数', this);
    console.log(arguments, a, b);
    // fnt1函数本身
    console.log(arguments.callee)
}
// 直接调用已声明的函数
// 传入实参 不校验实参个数和类型
// 实参不校验个数所以函数将按照传入顺序依次赋值形参
// 实参不校验类型所以可以传入任何类型的数据包括函数本身
// this指向函数的调用方 此时this指向window
let c = fnt1(3);
console.log("声明式函数返回值", c);

// 使用函数对象的call方法触发函数执行
// call方法第一个参数会作为函数内的this指向
// 其他参数依次作为实参传递
// 当没有参数时 this指向和直接调用一致
c = fnt1.call(4, 1, 5, 6);
console.log("声明式函数返回值", c);
// 使用函数对象的apply方法触发函数执行
// apply方法第一个参数会作为函数内的this指向
// 第二个参数作为实参传递(必须是一个数组)
// 当没有参数时 this指向和直接调用一致
c = fnt1.apply(1, [5, 'g', 5, 'd3', 4]);
console.log("声明式函数返回值", c);

const _type1 = typeof fnt1;
console.log(typeof _type1, _type1, fnt1);