<template>
  <div id="app">
    <!-- ref可以作为id的替代者 -->
    <h2>{{ msg }}</h2>
    <Gs />
    <XhrSender />
  </div>
</template>

<script>
import Gs from "./components/Gs";

export default {
  name: "App",
  components: {
    Gs,
    XhrSender,
  },
  data() {
    return {
      msg: "hello world",
    };
  },
};
</script>