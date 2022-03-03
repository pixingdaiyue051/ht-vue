<template>
  <div class="left-bar">
    <ul v-if="userList.length">
      <li
        v-for="item in userList"
        :key="item.id"
        @click="chooseUser(item)"
      >
        {{ item.name }}
      </li>
    </ul>
    <span v-if="serviceName">已连接到{{ serviceName }}</span>
  </div>
</template>

<script>
export default {
  name: "ImLeft",
  computed: {
    userList() {
      return this.$store.state.service.userList;
    },
    serviceName() {
      return this.$store.state.user.serviceName;
    }
  },
  methods: {
    chooseUser(user) {
      this.$store.commit('service/chooseUser', user);
    },
  },
};
</script>

<style scoped>
.left-bar {
  border: 1px solid #000;
  float: left;
  width: 298px;
  /* 300 */
  height: 698px;
  /* 700 */
}
</style>