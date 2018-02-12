<template>
  <div class="movie-view has-header">
    <scroller title="影院热映" type="hasCover" :items="hotMovies"></scroller>
    <scroller title="免费在线观影" type="hasCover" :items="topMovies"></scroller>
    <scroller title="新片速递" type="hasCover" :items="newMovies"></scroller>
    <scroller title="发现好电影" type="onlyString" :items="movieTags"></scroller>
    <types></types>
    <download-app></download-app>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Scroller from '../components/Scroller'
import Types from '../components/Types'
import DownloadApp from '../components/DownloadApp'
import { GET_MOVIE } from '@/store/actions'

export default {
  name: 'movie-view',
  components: { Scroller, Types, DownloadApp },
  data () {
    return {
      count: 8
    }
  },
  computed: {
    // Getting Vuex State from store/modules/movie
    ...mapState({
      hotMovies: state => state.movie.hotMovies,
      topMovies: state => state.movie.topMovies,
      newMovies: state => state.movie.newMovies,
      movieTags: state => state.movie.movieTags
    })
  },
  created () {
    // Getting movies data on created
    const payload = {
      count: this.count
    }
    this.$store.dispatch(GET_MOVIE, payload)
  }
}
</script>

<style scoped>

</style>
