<template>
  <el-container class="skm-layout">
    <el-header class="skm-page-header-container" height="61px">
      <page-header></page-header>
    </el-header>
    <el-container>
      <el-aside :width="asideWidth">
        <aside-nav @collapse="handleCollapse"></aside-nav>
      </el-aside>
      <el-container>
        <el-main class="skm-main-container">
          <!-- 页面内容 -->
          <router-view></router-view>
        </el-main>
        <el-footer>
          <page-footer></page-footer>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import PageHeader from 'comps/layout/PageHeader'
import AsideNav from 'comps/layout/AsideNav'
import PageFooter from 'comps/layout/PageFooter'

export default {
  name: 'app',
  components: {
    PageHeader,
    AsideNav,
    PageFooter
  },
  data () {
    return {
      asideWidth: 'auto'
    }
  },
  methods: {
    handleCollapse (flag) {
      if (flag) {
        this.asideWidth = 'auto'
      } else {
        this.asideWidth = '200px'
      }
    }
  }
}
</script>

<style lang="scss">
@import "./styles/common.scss";
.skm-layout {
  height: 100%;
}
.skm-page-header-container {
  height: 100%;
  border-bottom: solid 1px #e6e6e6;
}
.skm-main-container {
  padding: 0;
}
</style>
