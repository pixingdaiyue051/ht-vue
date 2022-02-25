<template>
  <li>
    <!-- <input type="checkbox" v-model="todoItem.finished" /> -->
    <input
      type="checkbox"
      :checked="todoItem.finished"
      @change="handlerChange(todoItem.id)"
    />
    <span v-show="!todoItem.isEdit">{{ todoItem.title }}</span>
    <input
      type="text"
      ref="_editInp"
      v-show="todoItem.isEdit"
      :value="todoItem.title"
      @blur="handlerBlur(todoItem, $event)"
    />
    <button v-show="!todoItem.isEdit" @click="handlerEdit(todoItem)">
      修改
    </button>
    <button @click="handlerDelete(todoItem.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todoItem"],
  methods: {
    handlerChange(id) {
      this.$bus.$emit("checkTodo", id);
    },
    handlerEdit(todo) {
      // 判断是否有isEdit属性
      if (Object.prototype.hasOwnProperty.call(todo, "isEdit")) {
        todo.isEdit = true;
      } else {
        // 为todo动态添加一个vue响应式属性
        this.$set(todo, "isEdit", true);
      }
      // 文本框获取焦点
      // nextTick在dom重新解析完成后回调
      // this.$nextTick(() => this.$refs._editInp.focus());
      setTimeout(() => this.$refs._editInp.focus(), 0);
    },
    handlerBlur(todo, evt) {
      todo.isEdit = false;
      const tmp = evt.target.value;
      if (!tmp) {
        return;
      }
      if (tmp === todo.title) {
        return;
      }
      todo.title = tmp;
    },
    handlerDelete(id) {
      if (!confirm("确认删除吗?")) {
        return;
      }
      this.$bus.$emit("deleteTodo", id);
    },
  },
};
</script>

<style scoped>
</style>