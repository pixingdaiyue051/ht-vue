import { nanoid } from "nanoid";

export default {
    namespaced: true, // 指定命名空间 页面上引入是需要使用该命名空间作为前缀才能使用
    mutations: {
        // ws成功连接 初始化数据并发送一条订阅消息
        openWs(state, obj) {
            state.ws = obj.ws;
            state.userId = obj.userId;
            const message = {
                value: obj.userId,
                code: "5000",
            };
            obj.ws.send(JSON.stringify(message));
        },
        // ws消息回调
        messageCallback(state, json) {
            if ("5100" == json.code) {
                state.messageList.push({
                    id: nanoid(),
                    msg: `接收:${json.data.content}`,
                });
            }
            if ("5102" == json.code) {
                state.messageList.push({
                    id: nanoid(),
                    msg: json.msg,
                });
            }
            if ("5101" == json.code) {
                state.serviceId = json.data.sender;
                state.serviceName = json.data.senderName
            }
        },
        mySend(state, msg) {
            const message = {
                code: "5001",
                value: {
                    type: "1",
                    content: msg,
                    sender: state.userId,
                    receiver: state.serviceId,
                },
            };
            state.ws.send(JSON.stringify(message));
            state.messageList.push({
                id: nanoid(),
                msg: `发送:${msg}`,
            });
        },
        end(state) {
            state.ended = true;
            const message = {
                code: "5010",
                value: state.userId,
            };
            state.ws.send(JSON.stringify(message));
        }
    },
    state: {
        ws: undefined,
        serviceId: "",
        serviceName: "",
        userId: "",
        messageList: [],
        ended: false
    }
}