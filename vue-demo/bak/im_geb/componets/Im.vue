<template>
  <div class="container">
    <ImLeft :userList="userList" />
    <ImRight :messageList="messageList" />
    <ImBottom />
  </div>
</template>

<script>
import ImLeft from "./ImLeft";
import ImRight from "./ImRight";
import ImBottom from "./ImBottom";
import WsConst from "../scripts/ws_const";
import { nanoid } from "nanoid";

export default {
  name: "Im",
  components: {
    ImLeft,
    ImRight,
    ImBottom,
  },
  props: ["serviceId"],
  data() {
    return {
      ended: false,
      limit: 0,
      userId: "",
      userList: [],
      messageList: [],
    };
  },
  methods: {
    conn() {
      this.ws = new WebSocket(WsConst.WS_URL);
      // 连接关闭函数
      this.ws.onclose = () => {
        console.log("连接已关闭...");
        if (this.ended || ++this.limit > WsConst.MAX_CONN_LIMIT) {
          return;
        }
        setTimeout(() => this.conn(), WsConst.RECONN_FREQ);
      };
      // 连接错误函数
      this.ws.onerror = () => {
        console.log("连接错误...");
      };
      // 连接建立 发送信息
      this.ws.onopen = () => {
        console.log("已连接...");
        this.limit = 0;
        // 成功连接后发送第一条消息
        this.initSend();
        // 开启心跳包
        this.heartBeat();
      };
      // 业务订阅成功后接受服务端推送消息 其实是个字符串
      this.ws.onmessage = (evt) => {
        const res = evt.data;
        console.log("接收到消息...", res);
        const json = JSON.parse(res);
        if ("4100" == json.code) {
          this.messageList.push({
            id: nanoid(),
            msg: `接收:${json.data.content}`,
          });
        }
        if ("4103" == json.code) {
          this.messageList.push({
            id: nanoid(),
            msg: json.msg,
          });
        }
        if ("4101" == json.code) {
          json.data
            .filter((e) => {
              const idx = this.userList.findIndex(
                (e1) => e.sender === e1.sender
              );
              return idx < 0;
            })
            .forEach((e) => {
              e.id = nanoid();
              this.userList.push(e);
            });
        }
        if ("4102" == json.code) {
          const idx = this.userList.findIndex(
            (e) => e.sender === json.data.sender
          );
          if (idx < 0) {
            const e = {
              id: nanoid(),
              sender: json.data.sender,
              name: json.data.name,
            };
            this.userList.push(e);
          }
        }
      };
    },
    initSend() {
      const message = {
        value: this.serviceId,
        code: "4000",
      };
      this.ws.send(JSON.stringify(message));
    },
    heartBeat() {
      this.tt = setTimeout(() => {
        this.ws.send(JSON.stringify(WsConst.MSG_HEART));
        this.heartBeat();
      }, WsConst.HEART_BEAT_FREQ);
    },
  },
  beforeDestroy() {
    // 清空绑定的方法
    const bindMethods = ["fetchUserId", "mySend", "end"];
    this.$bus.$off(bindMethods);
    // 清空定时任务
    clearTimeout(this.tt);
  },
  mounted() {
    // 获取选择的用户id
    this.$bus.$on("fetchUserId", (userId) => (this.userId = userId));
    // 发送一条消息
    this.$bus.$on("mySend", (msg) => {
      if (!this.userId) {
        console.log("userId为空");
        return;
      }
      const message = {
        code: "4001",
        value: {
          type: "1",
          content: msg,
          sender: this.serviceId,
          receiver: this.userId,
        },
      };
      this.ws.send(JSON.stringify(message));
      this.messageList.push({
        id: nanoid(),
        msg: `发送:${msg}`,
      });
    });
    // 结束会话
    this.$bus.$on("end", () => {
      clearTimeout(this.tt);
      this.ended = true;
      const message = {
        code: "4010",
        value: this.serviceId,
      };
      this.ws.send(JSON.stringify(message));
    });
    // 启动连接ws
    this.conn();
  },
};
</script>

<style scoped>
.container {
  border: 2px solid #000;
  width: 1000px;
  /* 1004 */
  height: 800px;
  /* 804 */
}
</style>