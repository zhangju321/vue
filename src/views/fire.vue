<template>
  <div class="fire">
    <h1>我是热卖页</h1>
  </div>
</template>

<script>
//  mapState可以把vuex中的数据映射到computed计算属性中
//   mapMutations  可以把vuex中的mutations内容映射到methods
//   mapActions 可以把vuex中的actions映射到methods
//    mapGetters 可以把vuex中的getters映射到computed中
import { mapState, mapMutations } from 'vuex'
export default {
  created() {
    this.loadDataEnd()
  },
  computed: {
    // ...mapState('book', {
    //   current: 'current'
    // })
    ...mapState('book', ['current', 'list'])
  },
  methods: {
    ...mapMutations('book', ['loadDataEnd', 'loadOneEnd'])
    // ...mapMutations('book', {
    //   lde: 'loadDataEnd',
    //   loadOneEnd: 'loadOneEnd'
    // })
  }
}
</script>

<style></style>
