<template>
  <div id="jm-home">
    <sub-nav mold="quickNav"></sub-nav>
    <list mold="thumbnail" :items="events"></list>
    <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
      <loading slot="spinner"></loading>
    </infinite-loading>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import InfiniteLoading from 'vue-infinite-loading'
import SubNav from '../components/SubNav'
import List from '../components/List'
import Loading from '../components/Loading'
import { LOAD_MORE } from '@/store/actions'

export default {
  name: 'jmHomeShow',
  components: {
    SubNav,
    List,
    InfiniteLoading,
    Loading
  },
  data () {
    return {
      time: 3
    }
  },
  computed: {
    ...mapState({
      events: (state) => state.activities.events
    })
  },
  methods: {
    onInfinite ($state) {
      if (this.time > 0) {
        setTimeout(() => {
          this.$store.dispatch(LOAD_MORE)
          $state.loaded()
          this.time--
        }, 1000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sub-nav {
  margin: 0 1.8rem;
  padding-top: 4.2rem;
}
</style>
