<template>
  <div id="app">
    <!-- ref可以作为id的替代者 -->
    <h2>{{ msg }}</h2>
    <Counter />
    <hr/>
    <DataList />
  </div>
</template>

<script>
import Counter from "./components/Counter";
import DataList from "./components/DataList";

export default {
  name: "App",
  components: {
    Counter,
    DataList,
  },
  data() {
    return {
      msg: "hello world",
    };
  },
  mounted() {
    console.log(this.$store);
  }
};
</script>