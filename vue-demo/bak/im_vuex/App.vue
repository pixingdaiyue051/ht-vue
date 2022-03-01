<template>
  <div>
    <input class="inp-bg-color" type="text" v-model="serviceId" />&nbsp;
    <button class="inp-bg-color"  @click="handlerService">提交Service</button>
    <br />
    <input  class="inp-bg-color" type="text" v-model="userId" />&nbsp;
    <button  class="inp-bg-color" @click="handlerUser">提交user</button>
    <br />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
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
      const {href} = this.$router.resolve({
          name: "im",
            query: {
              role: "service",
              serviceId: this.serviceId,
              userId: "",
            },
          })
      window.open(href, '_blank')
    },
    handlerUser() {
      if (!this.userId) {
        return;
      }
      const {href} = this.$router.resolve({
          name: "im",
          query: {
            role: "user",
            serviceId: "",
            userId: this.userId,
          },
        })
      window.open(href, '_blank')
    },
  },
  mounted() {
    console.log("App mounted");
  },
};
</script>

<style scoped>
.inp-bg-color {
  background-color: #725c5c75;
}
</style>