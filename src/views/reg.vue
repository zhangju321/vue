<template>
  <div class="reg">
    <h1>注册</h1>
    <!-- 在页面中放置一个移动的file标签 -->
    <!-- change事件表示文件选择之后触发 -->
    <input
      type="file"
      style="display:none;"
      ref="file"
      @change="fileSelected"
    />
    <ul>
      <li>
        <img
          style="width:80px;max-height:80px;display:block;margin:0 auto"
          :src="imgUrl"
          alt=""
          @click="changeImg"
        />
      </li>
      <li>
        <input type="text" v-model="useName" placeholder="请输入用户名" />
      </li>
      <li>
        <input type="password" v-model="password" placeholder="请输入密码" />
      </li>
      <li>
        <input
          type="password"
          v-model="rePassword"
          placeholder="请再次确认密码"
        />
      </li>
      <li>
        <input type="text" v-model="nickName" placeholder="请输入昵称" />
      </li>

      <li>
        <button @click="regHandle">注册</button>
      </li>
      <li>
        <router-link class="login-link" :to="{ name: 'login' }"
          >已有账号，立即登录</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { reg } from '../services/users'
import request from '../utils/request'
import { serverUrl } from '../utils/config'
import { setToken } from '../utils/auth'
export default {
  data() {
    return {
      useName: '',
      password: '',
      rePassword: '',
      nickName: '',
      avator: '',
      imgUrl: require('../assets/upload.png')
    }
  },
  methods: {
    changeImg() {
      //  找到页面所有属性为file的点击事件
      this.$refs.file.click()
    },
    async fileSelected(e) {
      const formData = new FormData()
      formData.append('file', e.currentTarget.files[0])
      const res = await request.post('/api/v1/common/file_upload', formData, {
        headers: {
          //  此处需要注意的设置请求头中的content-type
          'Content-Type': 'multipart/form-data'
        }
      })
      // console.log(res)
      this.avator = res.info
      this.imgUrl = serverUrl + res.info
    },
    async regHandle() {
      if (this.useName && this.password && this.rePassword) {
        if (this.password !== this.rePassword) {
          alert('两次输入的密码不一样')
          return
        }
        const res = await reg({
          userName: this.useName,
          password: this.password,
          rePassword: this.rePassword,
          nickName: this.nickName,
          avator: this.avator
        })
        console.log(res)
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
.reg {
  display: flex;
  align-items: center;
  height: 100%;
  flex-direction: column;
}
.login button {
  display: block;
  margin: 0.4rem auto;
  width: 80%;
}
.login-link {
  float: right;
  font-size: 0.8rem;
}
</style>
