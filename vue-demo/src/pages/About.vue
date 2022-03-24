<template>
  <div>
    <button @click="login">登录</button>
    <button @click="userList">列表</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "About",
  data() {
    return {
      sign: "",
      loginParams: {
        username: "hexk",
        password: "123456",
      },
    };
  },
  computed: {
    config() {
      return {
        headers: {
          sign: this.sign,
          appTenantId: 1,
        },
      };
    },
  },
  methods: {
    login() {
      this.post("user/login", this.loginParams, (res) => {
        this.sign = res.data.sign;
      });
    },
    userList() {
      const params = {};
      this.post("user/list", params);
    },
    post(uri1, params, fnt = (res) => console.log(res)) {
      axios
        .post(`http://localhost:8080/mid/${uri1}`, params, this.config)
        .then((res) => {
          console.log(res);
          fnt(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>