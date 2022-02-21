<template>
  <div>
    <input type="text" v-model="title" @keyup.enter="add" />
  </div>
</template>

<script>
import { nanoid } from "nanoid";

export default {
  name: "TodoTop",
  data() {
    return { title: "" };
  },
  methods: {
    add() {
      const tmp = this.title;
      if (!tmp) return;
      const obj = { id: nanoid(), title: tmp, finished: false };
      this.$bus.$emit("addTodo", obj);
      this.title = "";
    },
  },
};
</script>

<style scoped>
</style>