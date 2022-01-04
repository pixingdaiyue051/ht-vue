const express = require('express');

const app = express();

// app.use 注册全局访问路由
// 跨域请求
const cors =  require('cors');
app.use(cors());
// 注册使用session
const exss = require('express-session');
app.use(exss({
    secret: 'apphd5',
    resave: false,
    saveUninitialized: true
}));
// 加载静态资源 默认不带访问路径
app.use(express.static("./out"));
// 指定访问路径
// app.use('/out', express.static("./out"));

// 接收并解析 Content-Type application/json 请求
app.use(express.json());
// 接收并解析 Content-Type application/x-www-form-urlencoded 请求
app.use(express.urlencoded({ extended: false }));
// 接收并解析 Content-Type text/plain 请求
app.use(express.text());
// 接收并解析 Content-Type
// app.use(express.raw());

// 自定义中间件
app.use((req, res, next) => {
    req.party = [1];
    console.log("中间件1");
    next();
});
app.use((req, res, next) => {
    req.party.push(2);
    console.log("中间件2");
    next();
});
app.use((req, res, next) => {
    req.party.push(3);
    console.log("中间件3");
    next();
});

// 监听get请求
app.get('/', (req, res) => {
    console.log(req.query);
    res.send(req.query);
});

// 监听post请求
app.post('/', (req, res) => {
    console.log(req.query);
    res.send(req.query);
});

app.get('/test', (req, res, next) => {
    console.log("test局部中间件");
    console.log(req);
    if (req.query.err) {
        throw new Error("1/0");
    }
    next();
}, (req, res) => {
    res.send(req.body);
});

// 加载其他模块路由
app.use(require('./router1'));

// 内部错误转发至该中间件处理
app.use((err, req, res, next) => {
    console.log(err.message);
    res.send('err');
});

const hostname = '127.0.0.1';
const port = 8541;

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})