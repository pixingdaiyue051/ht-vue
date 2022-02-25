<template>
  <div>
    <p style="color: red">计算结果:{{ sum }}</p>
    <p style="color: red">计算结果:{{ bigSum }}</p>

    <button @click="addItem">+</button>
    <ul>
      <li v-for="item in arrPoint" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  name: "DataList_bak",
  computed: {
    ...mapState(["sum", "arrPoint"]),
    // sum() {
    //   return this.$store.state.sum;
    // },
    // arrPoint() {
    //   return this.$store.state.arrPoint;
    // },
    ...mapGetters(["bigSum"]),
    // bigSum() {
    //   return this.$store.getters.bigSum;
    // },
  },
  methods: {
    ...mapMutations({ addItem: "ADD_ITEM" }),
    // addItem() {
    //   this.$store.commit("ADD_ITEM");
    // },
  },
};
</script>