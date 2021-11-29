if ("WebSocket" in window) {
    console.log("支持WebSocket");
    console.log("路径", WS_URL);
    conn();
} else {
    alert("该浏览器不支持WebSocket")
}
// 基础参数
var ws_temp = {
    // ws连接地址
    uri: "ws://127.0.0.1:8342",
    // 心跳频率 30s
    heart_freq: 30000,
    // 断开重连间隔 10s
    conn_freq: 10000,
    // 已尝试连接次数
    limit = 0,
    // 最大连接次数
    conn_limit = 5,
}

var ws1 = {
    // 时间间隔函数
    tt: undefined,
    // WebSocket对象
    ws: undefined,

    heart_temp: {
        code: "2000",
        msg: "心跳包..."
    },

    sub_temp: {
        key: "sub",
        value: "1111",
        code: "2001",
        msg: "订阅包..."
    },

    biz_temp: {
        key: "biz",
        value: "1111",
        code: "2002",
        msg: "业务包..."
    },

    initSend: function() {
        ws.send(JSON.stringify(sub_temp));
    },

    heartBeat: function() {
        tt = setInterval(function () {
            ws.send(JSON.stringify(heart_temp));
        }, ws_temp.heart_freq);
    },

    conn: function(ws_url = ws_temp.uri) {
        ws = new WebSocket(ws_url);
        // 连接关闭函数
        ws.onclose = function () {
            console.log("连接已关闭...尝试重连", ws_temp.limit);
            clearInterval(tt);
            if (++ws_temp.limit < ws_temp.conn_limit) {
                setTimeout(function(){
                    conn();
                }, ws_temp.conn_freq);
            }
        };
        // 连接错误函数
        ws.onerror = function () {
            console.log("连接错误...");
            clearInterval(tt);
        };
        // 连接建立 发送信息
        ws.onopen = function () {
            ws_temp.limit = 0; 
            console.log("已连接...");
            // 成功连接后发送第一条消息
            initSend();
            // 心跳检测启动
            heartBeat();
        };
        // 业务订阅成功后接受服务端推送消息 其实是个字符串
        ws.onmessage = function (evt) {
            console.log("接收到消息", evt);
            // $("#_span").html(evt.data);
        };
    },
}