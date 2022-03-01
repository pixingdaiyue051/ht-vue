<template>
  <div class="left-bar">
    <ul>
      <li v-show="userList.length"
        v-for="item in userList"
        :key="item.id"
        @click="chooseUser(item)"
      >
        {{ item.name }}
      </li>
      <li v-show="serviceName">
        已连接到{{ serviceName }}
      </li>
    </ul>
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