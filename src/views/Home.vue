<template>
  <div class="home">
    <h3>{{ $store.state.count }}</h3>
    <p>{{ $store.getters.listCount }}</p>
    <button @click="countAdd">添加+1</button>
    <button @click="countAddByStep(3)">添加+3</button>
    <button @click="countReduce">减</button>

    <!-- <ul></ul> -->
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <img class="Img" src="../assets/2019100.jpg" alt="七月" /> -->
    <img class="Img" :src="xy" alt="七月" />
    <ul>
      <li v-for="item in $store.state.list" :key="item._id">
        {{ item.name }}
        <button @click="buyHandle">购买</button>
      </li>
    </ul>
    <button @click="loadData" v-show="isShowLoadMore">加载数据</button>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" />  -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import xx from '../assets/2019100.jpg'
import { mapMutations } from 'vuex'
export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data() {
    return {
      xy: require('../assets/2019100.jpg'),
      isShowLoadMore: true
    }
  },
  methods: {
    ...mapMutations(['buy']),
    //  commit 操作会传递两个参数  type  payload
    //  type表示mutation中的名字
    //  payload  表示参数
    countAdd() {
      this.$store.commit('plus')
    },
    countAddByStep(buchang) {
      this.$store.commit('plus', buchang)
    },
    countReduce() {
      this.$store.commit('reduce')
    },
    loadData() {
      if (this.$store.state.pages < this.$store.state.page) {
        this.isShowLoadMore = false
      }
      this.$store.dispatch('loadData', { page: this.$store.state.page })
    },
    buyHandle() {
      // this.$store.commit('buy')
      this.buy()
    }
  }
}
</script>
<style scoped>
/* .Img {
  display: inline-block;
  width: 200px;
  height: 200px;
} */
</style>
