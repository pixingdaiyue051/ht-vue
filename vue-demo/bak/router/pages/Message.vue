<template>
  <div>
    <ul>
      <li v-for="msg in messageList" :key="msg.id">
        <!-- 
          复用同一个组件传递不同参数 
        -->
        <!-- 借助query $route.query -->
        <!-- <router-link
          :to="`/home/message/detail?id=${msg.id}&title=${msg.title}`"
          >{{ msg.title }}</router-link
        > -->
        <!-- <router-link
          :to="{
            name: 'detail',
            // path: '/home/message/detail',
            query: {
              id: msg.id,
              title: msg.title,
            },
          }"
        >
          {{ msg.title }}
        </router-link> -->
        <!-- 传递一个对象 -->
        <router-link
          :to="{
            name: 'detail',
            // path: '/home/message/detail',
            query: {
              data: msg.data
            },
          }"
        >
          {{ msg.title }}
        </router-link>
        <!-- 借助params $route.params -->
        <!-- <router-link :to="`/home/message/detail/${msg.id}/${msg.title}`">{{ msg.title }}</router-link> -->
        <!-- <router-link
          :to="{
            name: 'detail', // 这里只能使用name不能用path
            params: {
              id: msg.id,
              title: msg.title,
            },
          }"
        >
          {{ msg.title }}
        </router-link> -->
        <button @click="push(msg)">push</button>
        <button @click="replace(msg)">replace</button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        {
          id: "001",
          title: "001",
          data: {
            name: "可能卡巴v",
            num: 563,
            order: 1,
            pay: ["4354", "65675", 42235],
            isOk: true,
          },
        },
        {
          id: "002",
          title: "002",
          data: {
            name: "我v哪呢",
            num: 32144,
            order: 2,
            pay: ["不符合然后给", "重人格与", 42235],
            isOk: false,
          },
        },
        {
          id: "003",
          title: "003",
          data: {
            name: "不分好歹还有",
            num: 3645764,
            order: 3,
            pay: ["呵呵我也", "那天金额", 65436],
            isOk: false,
          },
        },
      ],
    };
  },
  methods: {
    push(msg) {
      // 使用router动态跳转具体的业务操作
      this.$router
        .push({
          name: "detail",
          query: {
            data: msg.data,
          },
        })
        .catch((err) => console.log(err));
    },
    replace(msg) {
      this.$router
        .replace({
          name: "detail",
          query: {
            data: msg.data,
          },
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>