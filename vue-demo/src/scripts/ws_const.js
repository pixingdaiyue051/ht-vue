export default {
    // 默认地址
    WS_URL: "wss://qinshitong.work/wsapp",
    // 默认地址
    WS_URL_1: "ws://127.0.0.1:7132",
    // 心跳频率 30s
    HEART_BEAT_FREQ: 30000,
    // 最大连接次数
    MAX_CONN_LIMIT: 5,
    // 断开重连间隔 10s
    RECONN_FREQ: 10000,
    // 心跳包消息体
    MSG_HEART: { code: "2000" }
}