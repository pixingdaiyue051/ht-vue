<template>
  <div class="left-bar">
    <ul>
      <li
        v-for="item in userList"
        :key="item.id"
        @click="chooseUser(item)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ImLeft",
  props: ["userList"],
  methods: {
    chooseUser(user) {
      this.$bus.$emit("fetchUserName", user.name);
      this.$bus.$emit("fetchUserId", user.sender);
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