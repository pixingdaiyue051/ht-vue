<template>
  <div class="row">
    <div
      v-show="info.userList.length"
      class="card"
      v-for="user in info.userList"
      :key="user.login"
    >
      <a :href="user.avatar_url" target="_blank">
        <img :src="user.html_url" />
      </a>
      <p>{{ user.login }}</p>
    </div>
    <p v-show="info.isFirst">Welcome</p>
    <p v-show="info.isLoading">loading...</p>
    <p v-show="info.errMsg">{{ info.errMsg }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "GsList",
  data() {
    return {
      info: {
        isFirst: true,
        isLoading: false,
        errMsg: "",
        userList: [],
      },
    };
  },
  mounted() {
    // 1、
    this.$bus.$on("fetchInfo", (data) => {
      // 将info和data按量按key进行合并更新
      this.info = { ...this.info, ...data };
    });

    // 2、
    this.$bus.$on("fetchKeyWord", (k) => {
      this.info.isFirst = false;
      this.info.isLoading = true;
      this.info.errMsg = "";
      this.info.userList = [];
      axios
        .get(`https://api/github.com/search/users?q=${k}`)
        .then((res) => {
          this.info.isLoading = false;
          this.info.errMsg = "";
          this.info.userList = res.data.item;
        })
        .catch((err) => {
          this.info.isLoading = false;
          this.info.errMsg = err.message;
          this.info.userList = [];
        })
        .then(() => console.log("always called back"));
    });
  },
  beforeDestroy() {
    this.$bus.$off(["fetchInfo","fetchKeyWord"]);
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-top: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
  width: 100px;
}

.card > p {
  font-size: 85%;
}
</style>