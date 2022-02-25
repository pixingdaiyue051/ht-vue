<template>
  <div>
    <p>计算结果:{{ sum }}</p>
    <p>测试1:{{ strPoint }}</p>
    <p>测试2:{{ objPoint }}</p>
    <p style="color: red">测试3:{{ arrPoint.length }}</p>
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
  name: "Counter",
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    // 加入命名空间后map方法也需要提供相应的名字
    ...mapState("counter", ["sum", "strPoint", "objPoint", "arrPoint"]),
    ...mapState("datalist", ["arrPoint"]),
    // sum(){
    //   return this.$store.state.counter.sum;
    // },
    // strPoint(){
    //   return this.$store.state.counter.strPoint;
    // },
    // objPoint(){
    //   return this.$store.state.counter.objPoint;
    // },
    // arrPoint(){
    //   return this.$store.state.datalist.arrPoint;
    // },
    ...mapGetters("counter", ["bigSum", "largePoint"]),
    // bigSum(){
    //   return this.$store.getters['counter/bigSum'];
    // },
    // largePoint(){
    //   return this.$store.getters['counter/largePoint'];
    // },
  },
  methods: {
    ...mapMutations("counter", { incr: "INCR", decr: "DECR" }),
    // incr(val) {
    //   this.$store.commit("counter/INCR", val);
    // },
    // decr(val) {
    //   this.$store.commit("counter/DECR", val);
    // },
    ...mapActions("counter", ["incrOdd", "incrAwait"]),
    // incrOdd(val) {
    //   this.$store.dispatch("counter/incrOdd", val);
    // },
    // incrAwait(val) {
    //   this.$store.dispatch("counter/incrAwait", val);
    // },
  },
};
</script>