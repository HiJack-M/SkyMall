<template>
  <div class="secondary-container">
    <div class="side-nav">
      <slot name="side-nav"></slot>
    </div>
    <div class="page-content">
      <slot>
        <router-view></router-view>
      </slot>
    </div>
  </div>
</template>

<style lang="scss">
.secondary-container {
  overflow: hidden;
  height: 100%;

  .side-nav {
    width: 200px;
    float: left;
    height: 100%;

    .el-menu {
      height: 100%;
    }
  }
  .page-content {
    overflow: scroll;
    padding: 10px;
  }
}
</style>

