<template>
  <ul>
    <!-- <li>消息id:{{ $route.query.id }}</li>
    <li>消息title:{{ $route.query.title }}</li> -->
    <!-- <li>消息id:{{ $route.params.id }}</li>
    <li>消息title:{{ $route.params.title }}</li> -->
    <!-- <li>消息id:{{ id }}</li>
    <li>消息title:{{ title }}</li> -->
    <li>{{ data.name }}</li>
    <li>{{ data.num }}</li>
    <li>{{ data.order }}</li>
    <li>{{ data.pay }}</li>
    <li>{{ data.isOk }}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  // props: ["id", "title"],
  props: ["data"],
  mounted() {
    console.log(this.$route);
  },
};
</script>