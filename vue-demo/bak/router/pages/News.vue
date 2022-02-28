<template>
  <ul>
    <li :style="{ opacity }">hello router</li>
    <li>news001</li>
    <input type="text" />
    <li>news002</li>
    <input type="text" />
    <li>news003</li>
    <input type="text" />
  </ul>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
    };
  },
  beforeDestroy() {
    console.log("News beforeDestroy");
  },
  mounted() {
    console.log("News mounted");
  },
  // 组件获得焦点激活时触发
  activated() {
    console.log("News activated");
    this.timer = setInterval(() => {
      this.opacity -= 0.01;
      if (this.opacity <= 0) {
        this.opacity = 1;
      }
    }, 15);
  },
  // 组件失去焦点失活时触发
  deactivated() {
    console.log("News deactivated");
    clearInterval(this.timer);
  },
  // 通过路由规则匹配进入该组件之前触发
  // 在其他前置路由之后执行
  // 此时组件还没有加载 mounted还没挂载完毕 不可以使用this指向当前组件
  beforeRouteEnter(to, from, next) {
    console.log("news beforeRouteEnter");
    next();
  },
  // 通过路由规则匹配离开该组件之前触发
  beforeRouteLeave(to, from, next) {
    console.log("news beforeRouteLeave", this);
    next();
  },
};
</script>