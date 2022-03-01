<template>
  <div>
    <h2>Home</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
      <!-- 让挂载的组件缓存 使用include属性指定需要缓存的组件名 如果不指定include则缓存所有在该区域挂载的组件 -->
      <keep-alive>
      <!-- <keep-alive include="News"> -->
      <!-- <keep-alive :include="['News','Message']"> -->
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    console.log('Home mounted')
  },
};
</script>