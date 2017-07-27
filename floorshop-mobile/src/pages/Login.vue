<template>
  <f7-login-screen @loginscreen:closed="reset">
    <f7-view>
      <f7-pages>
        <f7-page login-screen>
          <f7-toolbar tabbar top>
            <f7-link tab-link="#Sign-In" text="登录" active></f7-link>
            <f7-link tab-link="#Sign-Up" text="注册"></f7-link>
          </f7-toolbar>
          <f7-tabs>
            <f7-tab id="Sign-In" active>
              <f7-list form>
                <f7-list-item>
                  <f7-label>用户名</f7-label>
                  <f7-input name="username" placeholder="请输入登录用户名" type="text" v-model="login.username" autocomplete="off"></f7-input>
                </f7-list-item>
                <f7-list-item>
                  <f7-label>密码</f7-label>
                  <f7-input name="password" type="password" placeholder="请输入登录密码" v-model="login.password" autocomplete="off"></f7-input>
                </f7-list-item>
              </f7-list>
              <f7-list>
                <f7-list-button title="登录" close-login-screen></f7-list-button>
              </f7-list>
            </f7-tab>
            <f7-tab id="Sign-Up">
              <f7-list form>
                <f7-list-item>
                  <f7-label>用户名</f7-label>
                  <f7-input name="username" placeholder="用户名规则" type="text" v-model="signup.username" autocomplete="off"></f7-input>
                </f7-list-item>
                <f7-list-item>
                  <f7-label>密码</f7-label>
                  <f7-input name="password" type="password" placeholder="密码规则" v-model="signup.password" autocomplete="off"></f7-input>
                </f7-list-item>
                <f7-list-item>
                  <f7-label>确认密码</f7-label>
                  <f7-input name="rePassword" type="password" placeholder="请再次输入密码" v-model="signup.rePassword" autocomplete="off"></f7-input>
                </f7-list-item>
              </f7-list>
              <f7-list>
                <f7-list-label>
                  <p>注册即同意楼店服务协议</p>
                </f7-list-label>
                <f7-list-button title="注册" close-login-screen></f7-list-button>
              </f7-list>
            </f7-tab>
          </f7-tabs>
        </f7-page>
      </f7-pages>
    </f7-view>
  </f7-login-screen>
</template>

<script>

function initData () {
  return {
    login: {
      username: '',
      password: ''
    },
    signup: {
      username: '',
      password: '',
      rePassword: ''
    }
  }
}

export default {
  name: 'login',
  data: initData,
  methods: {
    clickToLogin () {
      console.log(this.login)
    },
    clickToSignup () {
      console.log(this.signup)
    },
    reset () {
      console.log('reset')
      Object.assign(this.$data, initData.apply(this))
    }
  }
}
</script>

