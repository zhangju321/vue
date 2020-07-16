<template>
  <div class="login">
    <h1>登录页</h1>
    <ul>
      <li>
        <input type="text" v-model="useName" placeholder="请输入用户名" />
      </li>
      <li>
        <input type="password" v-model="password" placeholder="请输入密码" />
      </li>
      <li>
        <button @click="loginHandle">登录</button>
      </li>
      <li>
        <router-link class="reg-link" :to="{ name: 'reg' }"
          >没有账号，我要注册</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { login } from '../services/users'
import { setToken } from '../utils/auth'
export default {
  data() {
    return {
      useName: '',
      password: ''
    }
  },
  methods: {
    async loginHandle() {
      if (this.useName && this.password) {
        const res = await login({
          userName: this.useName,
          password: this.password
        })
        // console.log(res)
        if (res.code === 'success') {
          setToken(res.setToken)
          this.$router.push({
            name: 'home'
          })
        } else {
          alert(res.message)
        }
      } else {
        alert('请输入用户名和密码')
      }
    }
  }
}
</script>

<style scoped>
.login {
  display: flex;
  align-items: center;
  /* justify-content: center; */
  height: 100%;
  flex-direction: column;
}
.login button {
  display: block;
  margin: 0.4rem auto;
  width: 80%;
}
.reg-link {
  float: right;
  font-size: 0.8rem;
}
</style>
