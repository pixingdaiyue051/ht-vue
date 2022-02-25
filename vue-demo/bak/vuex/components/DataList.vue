<template>
  <div>
    <p style="color: red">计算结果:{{ sum }}</p>
    <p style="color: red">计算结果:{{ bigSum }}</p>

    <button @click="addItem">+</button>

    <button @click="addRandomItem">+</button>
    <ul>
      <li v-for="item in arrPoint" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
// import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "DataList",
  computed: {
    // ...mapState(["sum", "arrPoint"]),
    sum() {
      return this.$store.state.counter.sum;
    },
    arrPoint() {
      return this.$store.state.datalist.arrPoint;
    },
    // ...mapGetters(["bigSum"]),
    bigSum() {
      return this.$store.getters["counter/bigSum"];
    },
  },
  methods: {
    // ...mapActions("datalist", ["addRandomItem"]),
    addRandomItem() {
      this.$store.dispatch("datalist/addRandomItem");
    },
    // ...mapMutations("datalist", { addItem: "ADD_ITEM" }),
    addItem() {
      this.$store.commit("datalist/ADD_ITEM");
    },
  },
};
</script>