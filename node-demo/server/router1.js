const express = require('express');

const rtest = express.Router();

// 监听get请求
rtest.get('/api/test0', (req, res) => {
    console.log(req.query);
    tmp = {"id":211, "name":"4ss"};
    req.session.tmp = tmp;
    console.log(req.session);
    res.send("/api/test0");
});

// 监听post请求
rtest.post('/api/test1', (req, res) => {
    console.log(req.query);
    console.log(req.session);
    res.send("/api/test1");
});

// 监听post请求
rtest.put('/api/test2', (req, res) => {
    console.log(req.query);
    res.send("/api/test2");
});

// 监听post请求
rtest.delete('/api/test3', (req, res) => {
    console.log(req.query);
    res.send("/api/test3");
});

module.exports = rtest;