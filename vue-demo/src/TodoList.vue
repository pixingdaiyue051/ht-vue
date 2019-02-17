<template>
  <div id="app">
    <input v-model="content"/>
    <input type="button" value="submit" @click="submit"/>
    <ul>
      <todo-item
        v-for="(item,index) of listToShow"
        :key="index"
        :index="index"
        :item="item"
        @delitem="del">
      </todo-item>
    </ul>
  </div>
</template>

<script>
  import TodoItem from './components/TodoItem'

  export default {
    name: 'TodoList',
    data() {
      return {
        content: '',
        listToShow: [],
      }
    },
    components: {
      'todo-item': TodoItem
    },
    methods: {
      submit() {
        this.listToShow.push(this.content);
        this.content = '';
      },
      del(index) {
        console.log(index);
        this.listToShow.splice(index, 1);
      }
    }
  }
</script>

<style>
</style>
