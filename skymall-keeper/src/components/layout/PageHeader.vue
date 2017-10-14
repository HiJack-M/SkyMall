<template>
  <div class="skm-page-header">
    <h1>
      <router-link :to="{ to: 'index' }">
        <img class="nav-logo" src="https://camo.githubusercontent.com/462f24153b8e8739c8ea71f7102585c4cb0e1575/68747470733a2f2f63646e2e7261776769742e636f6d2f456c656d6546452f656c656d656e742f6465762f656c656d656e745f6c6f676f2e737667">
      </router-link>
    </h1>
    <el-menu mode="horizontal" class="menu-nav" :router="true" :default-active='$route.path'>
      <el-menu-item index="/">账户详情</el-menu-item>
      <el-menu-item index="/about">订单管理</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Comp-PageHeader'
}
</script>

<style lang="scss">
.skm-page-header {
  overflow: hidden;
  height: 100%;

  h1 {
    margin: 0;
    float: left;
    height: 100%;
    position: relative;
    text-align: center;

    &:after {
      content: '';
      display: inline-block;
      height: 100%;
      vertical-align: middle;
    }

    a {
      text-decoration: none;
      display: inline-block;
      width: 150px;

      .nav-logo {
        vertical-align: bottom;
        width: 100%;
        height: auto;
      }
    }
  }
  .menu-nav {
    border: none;
    float: right;
  }
}
</style>

