<template>
  <div class="bottom-bar">
    <textarea class="text-bg-color" v-model="msg"></textarea>
    <input
      class="inp-bg-color"
      type="button"
      :value="'发送'+ userName"
      @click="mySend"
    />
    <input class="inp-bg-color" type="button" value="结束" @click="end" />
  </div>
</template>

<script>
export default {
  name: "ImBottom",
  props:['role'],
  data() {
    return {
      msg: "",
    };
  },
  computed:{
    userName() {
      const x = this.$store.state[this.role].userName;
      if(x) {
        return `给${x}`
      } else{
        return ''
      }
    }
  },
  methods: {
    mySend() {
      if (!this.msg) {
        return;
      }
      this.$store.commit(`${this.role}/mySend`, this.msg);
      this.msg = "";
    },
    end() {
      this.$store.commit(`${this.role}/end`, this.msg);
    },
  }
};
</script>

<style scoped>
.bottom-bar {
  border: 1px solid #000;
  float: right;
  width: 998px;
  /* 1000 */
  height: 98px;
  /* 100 */
}

.text-bg-color {
  background-color: #725c5c75;
  border: 1px solid #000;
  width: 800px;
  /* 1000 */
  height: 96px;
  /* 100 */
}

.inp-bg-color {
  background-color: #725c5c75;
}
</style>