<template>
  <div>
    <input type="text" v-model="title" @keyup.enter="add" />
  </div>
</template>

<script>
import pubsub from "pubsub-js";

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
      pubsub.publish("addTodo", obj);
      this.title = "";
    },
  },
};
</script>

<style scoped>
</style>