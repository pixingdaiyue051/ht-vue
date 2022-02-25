<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2>Vue router demo</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-2">
        <div class="list-group">
          <!-- 
            router-link 解析成 超链接 
            to 指向route中的path active-class 是激活时使用的class
            to 可以使用/也可以不使用/
            每次通过route跳转组件都是对应组件重新创建(当前组件不再是焦点组件是会被销毁)
            replace属性将改变浏览器记录这一次点击为replace模式(参考main.js中的注释)
            replace式简写模式 完整为 :replace="true"
           -->
          <router-link replace class="list-group-item" active-class="active" to="/about">About</router-link>
          <router-link replace class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 
              router-link 被激活时会将route中配置的组件加载到 router-view中
            -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "App",
};
</script>