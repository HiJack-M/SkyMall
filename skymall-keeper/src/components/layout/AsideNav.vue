<template>
  <div class="skm-aside-nav-container">
    <el-button type="text" icon="el-icon-fa-bars" @click="changeCollapse" class="col-button"></el-button>
    <el-menu default-active="1-4-1" class="aside-nav" :class="{ 'collapse-nav': isCollapse }">
      <el-submenu index="1">
        <template slot="title">
          <el-tooltip class="item" :disabled="!isCollapse" effect="dark" content="导航一" placement="right">
            <i class="el-icon-message"></i>
          </el-tooltip>
          <span slot="title" v-if="!isCollapse">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <el-tooltip class="item" :disabled="!isCollapse" effect="dark" content="导航二" placement="right">
          <i class="el-icon-menu"></i>
        </el-tooltip>
        <span slot="title" v-if="!isCollapse">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-tooltip class="item" :disabled="!isCollapse" effect="dark" content="导航二" placement="right">
          <i class="el-icon-setting"></i>
        </el-tooltip>
        <span slot="title" v-if="!isCollapse">导航三</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Comp-AsideNav',
  data () {
    return {
      isCollapse: true
    }
  },
  methods: {
    changeCollapse () {
      this.isCollapse = !this.isCollapse
      this.$emit('collapse', this.isCollapse)
    }
  }
}
</script>

<style lang="scss">
.skm-aside-nav-container {
  height: 100%;
  border-right: solid 1px #e6e6e6;
  text-align: center;

  .col-button {
    width: 100%;
  }
}
.aside-nav {
  border: none;
  text-align: left;
}
.collapse-nav {
  .el-submenu__icon-arrow {
    right: 22px;
    display: none;
  }
  i[class^=el-icon-] {
    margin-right: 0;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
  }
}
</style>

