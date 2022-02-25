<template>
  <div>
    <p>计算结果:{{ sum }}</p>
    <p>测试1:{{ strPoint }}</p>
    <p>测试2:{{ objPoint }}</p>
    <p style="color:red">测试3:{{ arrPoint.length }}</p>
    <p>计算结果:{{ bigSum }}</p>
    <p>计算结果:{{ largePoint }}</p>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="incr(n)">+</button>
    <button @click="decr(n)">-</button>
    <button @click="incrOdd(n)">奇数加</button>
    <button @click="incrAwait(n)">延迟加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Counter_bak",
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    // 使用mapState根据k-v映射对应的属性
    // 以下代码相当于单独计算state内的全局属性
    // 对象内使用...展开其他对象的所有属性放置在当前对象内
    // 当对象内的k-v相同时可以简写一个k
    ...mapState(["sum", "strPoint", "objPoint", "arrPoint"]),
    // sum(){
    //   return this.$store.state.sum;
    // },
    // strPoint(){
    //   return this.$store.state.strPoint;
    // },
    // objPoint(){
    //   return this.$store.state.objPoint;
    // },
    // arrPoint(){
    //   return this.$store.state.arrPoint;
    // },
    ...mapGetters(["bigSum", "largePoint"]),
    // bigSum(){
    //   return this.$store.getters.bigSum;
    // },
    // largePoint(){
    //   return this.$store.getters.largePoint;
    // },
  },
  methods: {
    ...mapMutations({ incr: "INCR", decr: "DECR" }),
    // incr(val) {
    //   this.$store.commit("INCR", val);
    // },
    // decr(val) {
    //   this.$store.commit("DECR", val);
    // },
    ...mapActions(["incrOdd", "incrAwait"]),
    // incrOdd(val) {
    //   this.$store.dispatch("incrOdd", val);
    // },
    // incrAwait(val) {
    //   this.$store.dispatch("incrAwait", val);
    // },
  },
};
</script>