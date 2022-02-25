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
};
</script>