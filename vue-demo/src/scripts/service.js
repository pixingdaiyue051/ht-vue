import { nanoid } from "nanoid";

export default {
    namespaced: true, // 指定命名空间 页面上引入是需要使用该命名空间作为前缀才能使用
    mutations: {
        // ws成功连接 初始化数据并发送一条订阅消息
        openWs(state, obj) {
            state.ws = obj.ws;
            state.serviceId = obj.serviceId;
            const message = {
                value: obj.serviceId,
                code: "4000",
            };
            obj.ws.send(JSON.stringify(message));
        },
        // ws消息回调
        messageCallback(state, json) {
            if ("4100" == json.code) {
                state.messageList.push({
                    id: nanoid(),
                    msg: `接收:${json.data.content}`,
                });
            }
            if ("4103" == json.code) {
                state.messageList.push({
                    id: nanoid(),
                    msg: json.msg,
                });
            }
            if ("4101" == json.code) {
                json.data
                    .filter((e) => {
                        const idx = state.userList.findIndex(
                            (e1) => e.sender === e1.sender
                        );
                        return idx < 0;
                    })
                    .forEach((e) => {
                        e.id = nanoid();
                        state.userList.push(e);
                    });
            }
            if ("4102" == json.code) {
                const idx = state.userList.findIndex(
                    (e) => e.sender === json.data.sender
                );
                if (idx < 0) {
                    const e = {
                        id: nanoid(),
                        sender: json.data.sender,
                        name: json.data.name,
                    };
                    state.userList.push(e);
                }
            }
        },
        // 选中需要发送的用户
        chooseUser(state, user) {
            state.userId = user.sender;
            state.userName = user.name;
        },
        mySend(state, msg) {
            if (!state.userId) {
                console.log("userId为空");
                return;
            }
            const message = {
                code: "4001",
                value: {
                    type: "1",
                    content: msg,
                    sender: state.serviceId,
                    receiver: state.userId,
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
                code: "4010",
                value: state.serviceId,
            };
            state.ws.send(JSON.stringify(message));
        }
    },
    state: {
        ws: undefined,
        serviceId: "",
        userId: "",
        userName: "",
        userList: [],
        messageList: [],
        ended: false
    }
}