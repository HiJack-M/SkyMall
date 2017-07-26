<template>
  <!-- App -->
  <div id="app">
    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>
    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
        <f7-pages>
          <f7-page>
            <f7-tabs>
              <f7-tab id="tab1" active>
                <Home></Home>
              </f7-tab>
              <f7-tab id="tab2">
                <Discover></Discover>
              </f7-tab>
              <f7-tab id="tab3">
                <Discount></Discount>
              </f7-tab>
              <f7-tab id="tab4">
                <Me></Me>
              </f7-tab>
            </f7-tabs>
            <f7-toolbar tabbar bottom>
              <f7-link tab-link="#tab1" text="Tab 1"></f7-link>
              <f7-link tab-link="#tab2" text="Tab 2"></f7-link>
              <f7-link tab-link="#tab3" text="Tab 3"></f7-link>
              <f7-link tab-link="#tab4" text="Tab 4"></f7-link>
            </f7-toolbar>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>
    <Login id="login-screen"></Login>
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
  }
}
</script>

<style lang="scss">
@import './styles/common.scss';
</style>
