<template>
  <div class="bottom-bar">
    <textarea class="text-bg-color" v-model="msg"></textarea>
    <input
      class="inp-bg-color"
      type="button"
      :value="sendBtn"
      @click="mySend"
    />
    <input class="inp-bg-color" type="button" value="结束" @click="end" />
  </div>
</template>

<script>
export default {
  name: "ImBottom",
  data() {
    return {
      msg: "",
      sendBtn: "发送",
    };
  },
  methods: {
    mySend() {
      if (!this.msg) {
        return;
      }
      this.$bus.$emit("mySend", this.msg);
      this.msg = "";
    },
    end() {
      this.$bus.$emit("end");
    },
  },
  beforeDestroy() {
    this.$bus.$off("fetchUserName");
  },
  mounted() {
    this.$bus.$on("fetchUserName", (userName) => {
      this.sendBtn = `发送给${userName}`;
    });
  },
};
</script>

<style scoped>
.bottom-bar {
  border: 1px solid #000;
  float: right;
  width: 998px;
  /* 1000 */
  height: 98px;
  /* 100 */
}

.text-bg-color {
  background-color: #725c5c75;
  border: 1px solid #000;
  width: 800px;
  /* 1000 */
  height: 96px;
  /* 100 */
}

.inp-bg-color {
  background-color: #725c5c75;
}
</style>