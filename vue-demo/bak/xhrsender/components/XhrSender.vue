<template>
  <div>
    <h3>{{ title }}</h3>

    <button @click="btn1">btn1</button>
    <button @click="btn2">btn2</button>
    <button @click="btnws">btnws</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "XhrSender",
  data() {
    return {
      title: "测试使用axios",
      ws: undefined,
    };
  },
  methods: {
    btn1() {
      axios
        .get("http://localhost:8510/demo/time")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => console.log("at last"));
    },
    btn2() {
      // 使用vue-resource api
      this.$http
        .get("http://localhost:8080/a80/demo/time")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => console.log("at last"));
    },
    heartBeat() {
      setTimeout(() => {
        const message = {
          code: "2000",
          msg: "心跳包...",
        };
        this.ws.send(JSON.stringify(message));
        this.heartBeat();
      }, 30000);
    },
    btnws() {
      this.ws = new WebSocket("ws://localhost:7132/ws");
      // 连接关闭函数
      this.ws.onclose = () => {
        console.log("连接已关闭...");
      };
      // 连接错误函数
      this.ws.onerror =  () => console.log("连接错误...");
      // 连接建立 发送信息
      this.ws.onopen =  () => {
        console.log("已连接...");
        const message = {
            "key": "call_apply",
            "value": "1428259147308097538", 
            "code": "2001",
            "msg": "业务包..."
        };
        this.ws.send(JSON.stringify(message));
        // 心跳包
        // this.heartBeat();
      };
      // 业务订阅成功后接受服务端推送消息 其实是个字符串
      this.ws.onmessage = function (evt) {
        const res = evt.data;
        console.log("接收到消息...", res);
      };
    },
  },
};
</script>