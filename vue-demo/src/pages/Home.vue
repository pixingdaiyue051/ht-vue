<template>
  <div>
    <p>
      <input class="inp-bg-color" type="text" v-model="serviceId" />&nbsp;
      <button class="inp-bg-color" @click="handlerService">提交Service</button>
    </p>
    <p>
      <input class="inp-bg-color" type="text" v-model="userId" />&nbsp;
      <button class="inp-bg-color" @click="handlerUser">提交user</button>
    </p>
    <p>
      <router-link class="inp-bg-color" to="/home/ws">测试</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      serviceId: "",
      userId: "",
    };
  },
  methods: {
    handlerService() {
      if (!this.serviceId) {
        return;
      }
      const { href } = this.$router.resolve({
        name: "im",
        query: {
          role: "service",
          serviceId: this.serviceId,
          userId: "",
        },
      });
      window.open(href, "_blank");
    },
    handlerUser() {
      if (!this.userId) {
        return;
      }
      const { href } = this.$router.resolve({
        name: "im",
        query: {
          role: "user",
          serviceId: "",
          userId: this.userId,
        },
      });
      window.open(href, "_blank");
    },
  },
};
</script>