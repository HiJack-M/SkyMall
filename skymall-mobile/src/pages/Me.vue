<template>
  <f7-page name="me">
    <f7-navbar title="Me" sliding></f7-navbar>
    <h1>Me!</h1>
    <Login id="SKM_Login"></Login>
  </f7-page>
</template>

<script>
import Login from '@/pages/Login'

export default {
  name: 'Page-Me',
  components: {
    Login
  },
  methods: {
    clickToLogin () {
      this.$f7.loginScreen('#SKM_Login')
    }
  }
}
</script>

