/* 构造函数  声明式函数 类 */
// 声明式函数在解析时会声明提前 并成为window的一个属性
// 直接调用一个声明式函数 相当于访问了window的一个属性
// 当使用new关键字调用一个声明式函数时 则会将该函数作为构造函数使用

function Fnt1() {
    console.log('Fnt1');
    this.id = 1122;
    this.name = 'rtw';
    console.log(this);
    return 4;
}

// 直接调用该函数 由于没有写返回值 所以v=undefined
let v = Fnt1();
console.log(v instanceof Fnt1);
// 作为构造函数调用 将按照以下流程执行
// 1. 新创建一个空对象 开启新的内存以存储该数据
// 2. 将this指向新创建的对象
// 3. 执行函数体内的代码
// 4. 返回该对象
// 可以使用new关键字以构造函数方式执行的函数也叫类(函数名首字母一般大写)
// 生成的对象v就是该类的一个实例 
// 可以使用 instanceof 关键字查看一个实例是否是某个类的实例
v = new Fnt1();
console.log(v instanceof Fnt1);
console.log(v.id, v.name);

const _type1 = typeof v;
console.log(typeof _type1, _type1, v);

