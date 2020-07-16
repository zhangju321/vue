import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import book from './modules/book'
import { getList } from '../services/products'

Vue.use(Vuex)
const store = new Vuex.Store({
  //  表示全局的state数据
  state: {
    count: 1,
    list: [],
    pages: 1, //  总页数
    totals: 0, //  总数据
    page: 1, //  当前页码
    cartCount: 0
  },
  //  是用来同步的改变数据
  //   通过commit可以提交一个mutation
  mutations: {
    plus(state, step = 1) {
      state.count += step
    },
    reduce(state) {
      state.count--
    },
    loadDataEnd(state, payload) {
      state.list = [...state.list, ...payload.products]
      state.pages = payload.pages
      state.totals = payload.totalCount
      state.page++
    },
    buy(state) {
      state.cartCount++
    }
  },
  actions: {
    //  接受两个参数
    //  参数一  context上下文
    //  包含了vuex中的所有数据
    //  参数二  表示传递的数据
    async loadData({ commit }, { page }) {
      // console.log(contenxt)
      // console.log(p)
      // const { commit } = contenxt
      // axios
      //   .get('http://localhost:3009/api/v1/products', {
      //     params: {
      //       page
      //     }
      //   })
      //   .then(res => {
      //     commit('loadDataEnd', res.data)
      //   })
      // getList(page).then(res => {
      //   commit('loadDataEnd', res.data)
      // })
      const res = await getList(page)
      commit('loadDataEnd', res)
    }
  },
  //  类似于vuex中的计算属性，当数据改变之后其值重新计算
  getters: {
    listCount(state) {
      return state.list.length
    }
  },
  modules: {
    book //  book:book
  }
})

export default store
