<template>
  <div class="user">
    <h1>个人中心</h1>
    <button @click="loginOut">退出</button>
  </div>
</template>

<script>
import { removeToken } from '../utils/auth'
export default {
  methods: {
    loginOut() {
      removeToken()
      // localStorage.removeItem('token')
      this.$router.push({
        name: 'login'
      })
    }
  }
}
</script>

<style></style>
