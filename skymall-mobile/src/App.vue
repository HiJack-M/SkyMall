<template>
  <!-- App -->
  <div id="app" class="theme-pink">
    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>
    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
        <f7-pages>
          <f7-page>
            <f7-tabs id="SKM_Main_Tab">
              <f7-tab id="Home" active>
                <Home></Home>
              </f7-tab>
              <f7-tab id="Discover">
                <Discover></Discover>
              </f7-tab>
              <f7-tab id="Discount">
                <Discount></Discount>
              </f7-tab>
              <f7-tab id="Me">
                <Me></Me>
              </f7-tab>
            </f7-tabs>
            <f7-toolbar tabbar bottom>
              <f7-link tab-link="#Home" @click="tabClick('#Home')" text="首页" active></f7-link>
              <f7-link tab-link="#Discover" @click="tabClick('#Discover')" text="发现"></f7-link>
              <f7-link tab-link="#Discount" @click="tabClick('#Discount')" text="折扣"></f7-link>
              <f7-link tab-link="#Me" @click="tabClick('#Me')" text="我"></f7-link>
            </f7-toolbar>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>
  </div>
</template>

<script>
import Home from '@/pages/Home'
import Discount from '@/pages/Discount'
import Discover from '@/pages/Discover'
import Me from '@/pages/Me'
import Login from '@/pages/Login'

export default {
  name: 'app',
  components: {
    Home,
    Discount,
    Discover,
    Me,
    Login
  },
  data () {
    return {
      currentTab: '#Home'
    }
  },
  methods: {
    tabClick (tabId) {
      this.currentTab = tabId
    }
  }
}
</script>

<style lang="scss">
@import "./styles/common.scss";
</style>
