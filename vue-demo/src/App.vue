<template>
  <div>
    <p>
      <span>测试接口mid</span>
      <router-link to="/about">About</router-link>
    </p>
    <p>
      <span>测试接口admin</span>
      <router-link to="/backend">Backend</router-link>
    </p>
    <p>
      <span>测试接口boot</span>
      <router-link to="/boot">Boot</router-link>
    </p>
    <p>
      <span>测试websocket</span>
      <router-link to="/home">Home</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    console.log("App mounted");
    console.log("this.$router", this.$router);
    console.log("this.$store", this.$store);
  },
};
</script>

<style scoped>
.inp-bg-color {
  background-color: #725c5c75;
}
</style>