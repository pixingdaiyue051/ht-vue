<template>
  <div>
    <input type="text" v-model="sMsg" />
    <input type="button" @click="mySend()" value="发送" />
    <br />
    <input type="file" id="_file" />
    <input type="button" @click="mySendFile()" value="发送" />
    <br />
    <span v-text="rMsg"></span>
  </div>
</template>

<script>
// WebSocket对象
let ws;
// 路径
let WS_URL = "ws://127.0.0.1/ws";
// 时间间隔
let tt;
// 心跳频率 30s
const HEART_BEAT_FREQ = 30000;
// 已尝试连接次数
let limit = 0;
// 最大连接次数
const MAX_CONN_LIMIT = 5;
// 断开重连间隔 10s
const CONN_FREQ = 10000;
// 心跳包格式
let heartBeatMsg = JSON.stringify({ code: "2000" });

export default {
  name: "demo",
  data() {
    return {
      sMsg: "C1",
      rMsg: "C1",
      wsUrl: "",
    };
  },
  methods: {
    connWs() {
      ws = new WebSocket(WS_URL);
      // 连接关闭函数
      ws.onclose = () => {
        console.log("连接已关闭...尝试重连", limit);
        clearInterval(tt);
        if (++limit < MAX_CONN_LIMIT) {
          setTimeout(() => this.connWs(), CONN_FREQ);
        }
      };
      // 连接错误函数
      ws.onerror = () => {
        console.log("连接错误...");
      };
      // 连接建立 发送信息
      ws.onopen = () => {
        console.log("已连接...");
        limit = 0;
        // 成功连接后发送第一条消息
        this.initSend();
        // 心跳检测启动
        this.heartBeat();
      };
      // 业务订阅成功后接受服务端推送消息 其实是个字符串
      ws.onmessage = (evt) => {
        console.log("接收到消息", evt.data);
        this.rMsg = evt.data;
      };
    },
    initSend() {
      const message = {
        key: "call_apply",
        value: "1428259147308097538",
        code: "2001",
        msg: "业务包...",
      };
      ws.send(JSON.stringify(message));
    },
    heartBeat() {
      tt = setInterval(() => ws.send(heartBeatMsg), HEART_BEAT_FREQ);
    },
    mySend() {
      if (!this.sMsg) {
        return;
      }
      const message = {
        code: "2002",
        msg: sMsg,
      };
      ws.send(JSON.stringify(message));
      this.sMsg = "";
    },
    mySendFile() {},
  },
};
</script>