<template>
  <div class="container">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/cart">购物车</router-link>
      <router-link to="/user">我的</router-link>
    </div>
    <router-view /> -->
    <div class="head">芒果商城-{{ $store.state.count }}</div>
    <router-view class="content"></router-view>

    <div v-show="isShowFooter" class="footer">
      <div
        :class="currentIndex == 0 ? 'nav active' : 'nav'"
        @click="navTo('Home', 0)"
      >
        <i class="fa fa-home"></i>
        <span>首页</span>
      </div>
      <div
        :class="currentIndex == 1 ? 'nav active' : 'nav'"
        @click="navTo('fire', 1)"
      >
        <i class="fa fa-fire"></i>
        <span>热卖</span>
      </div>
      <div
        :class="currentIndex == 2 ? 'nav active' : 'nav'"
        @click="navTo('cart', 2)"
      >
        <span v-show="$store.state.cartCount > 0" class="dot">{{
          $store.state.cartCount
        }}</span>
        <i class="fa fa-cart-plus"></i>
        <span>购物车</span>
      </div>
      <div
        :class="currentIndex == 3 ? 'nav active' : 'nav'"
        @click="navTo('user', 3)"
      >
        <i class="fa fa-user-secret"></i>
        <span>我的</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentIndex: 0,
      isShowFooter: true
    }
  },
  watch: {
    $route(v) {
      //  监听地址的变化  设置底部导航的显示和隐藏
      if (v.meta.isHideFooter) {
        this.isShowFooter = false
      } else {
        this.isShowFooter = true
      }
    }
  },
  methods: {
    navTo(routeName, index) {
      this.currentIndex = index
      this.$router
        .push({
          name: routeName
        })
        .catch(() => {})
    }
  }
}
</script>
<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
.container {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
.head {
  height: 40px;
  line-height: 40px;
  background: orange;
  text-align: center;
}
.content {
  flex: 1;
  overflow: auto;
}
.footer {
  height: 50px;
  background: orange;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.dot {
  background: deeppink;
  color: white;
  border-radius: 50%;
  padding: 0.2rem;
  text-align: center;
  font-size: 12px;
  position: relative;
  top: 10px;
  left: 6px;
  width: 1rem;
  height: 1rem;
}
img {
  max-width: 100%;
}
.nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.nav i {
  font-size: 20px;
}
.active {
  color: orangered;
}
.nav a {
  text-decoration: none;
  color: black;
}
.nav a span {
  font-size: 12px;
}
</style>
