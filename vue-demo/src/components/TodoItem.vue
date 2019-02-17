<template>
  <li @click="liClick">{{item}}</li>
</template>

<script>
  export default {
    name: 'TodoItem',
    props: ['item', 'index'],
    methods: {
      liClick() {
        this.$emit('delitem', this.index);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
