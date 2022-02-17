<template>
  <div id="app">
    <!-- ref可以作为id的替代者 -->
    <h2 ref="ttp">{{ msg }}</h2>
    <C1 ref="c1" c1p="prop1" :c1po="post1" />
    <hr />
    <C2 ref="c2" />
  </div>
</template>

<script>
import C1 from "./components/C1.vue";
import C2 from "./components/C2.vue";

export default {
  name: "App",
  components: {
    C1,
    C2,
  },
  data() {
    return {
      msg: "hello world",
      post1: { m1: 111, m2: 222},
    };
  },
  mounted() {
    // 输出全部由ref标签的dom元素
    console.log(this.$refs);
  },
};
</script>