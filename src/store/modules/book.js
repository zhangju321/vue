export default {
  namespaced: true, //  形成于给独立的明明空间
  state: {
    current: {
      title: '',
      desc: '',
      author: '',
      coverImg: ''
    },
    list: [],
    pages: 1,
    page: 1,
    totals: 0
  },
  mutations: {
    loadDataEnd(state, payload) {
      state.list = [
        { id: 1, name: '三体' },
        { id: 2, name: '流浪地球' },
        { id: 2, name: '闪电' }
      ]
      state.totals = 3
    },
    loadOneEnd(state, payload) {
      state.current.title = '三体'
      state.current.author = '珍珍'
      state.current.desc = '第一部科幻小说'
    }
  },
  getters: {
    listCount(state) {
      return state.list.length
    }
  }
}
