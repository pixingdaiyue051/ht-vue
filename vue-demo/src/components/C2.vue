<template>
  <!-- 模板 -->
  <div>
    <h3>{{ name }}</h3>
    <div>
      <ul>
        <li>{{ mx1_d1 }}</li>
        <li>{{ mx1_o1.k1 }}</li>
        <li>{{ mx1_o1.k2 }}</li>
        <li>{{ ttl2 }}</li>
      </ul>
    </div>
    <p @click="mx2_m1">点我查看控制台</p>
    <p @click="takeme">测试</p>
  </div>
</template>

<script>
// 引入混合js中的某些模块代码
import { mx1, mx2 } from "../scripts/mixin1.js"

export default {
  name: "C2",
  data() {
    return {
      name: "C2",
      ttl2: "模板ttl2",
    }
  },
  methods: {
    takeme() {
      console.log('模板takeme');
    }
  },
  // 使用混合代码
  // 混合文件中有和当前模板一致的属性方法时以当前模板为准
  mixins: [mx1, mx2],
}
</script>