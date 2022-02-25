<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">search users</h3>
      <div>
        <input
          type="text"
          placeholder="place keyword to search"
          v-model="keyWord"
        />&nbsp;
        <button @click="search1">Search1</button>
        <button @click="search2">Search2</button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "GsSearch",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    search1() {
      const tmp = this.keyWord;
      if (!tmp) {
        return;
      }

      this.$bus.$emit("fetchInfo", {
        isFirst: false,
        isLoading: true,
        errMsg: "",
        userList: [],
      });

      axios
        .get(`https://api/github.com/search/users?q=${tmp}`)
        .then((res) => {
          this.$bus.$emit("fetchInfo", {
            isLoading: false,
            errMsg: "",
            userList: res.data.item,
          });
        })
        .catch((err) => {
          this.$bus.$emit("fetchInfo", {
            isLoading: false,
            errMsg: err.message,
            userList: [],
          });
        })
        .then(() => this.keyWord = '');
    },
    search2() {
      const tmp = this.keyWord;
      if (!tmp) {
        return;
      }
      // 2、
      this.$bus.$emit("fetchKeyWord", tmp);
      this.keyWord = ''
    },
  },
};
</script>