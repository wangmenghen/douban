import { QUERY } from '../actions'
import { searchMovie, searchBook, searchMusic } from '../../lib/api'

const state = {
  queryRes_movie: [],
  queryRes_book: [],
  queryRes_music: []
}

const actions = {
  /**
   * Search
   * queryStr: String
   * count: 3 default
   */
  async [ QUERY ] ({ commit }, payload) {
    let movie = await searchMovie(payload.queryStr)
    commit({
      type: QUERY,
      tag: 'movie',
      res: movie.data.subjects
    })

    let music = await searchMusic(payload.queryStr)
    commit({
      type: QUERY,
      tag: 'music',
      res: music.data.subjects
    })

    let book = await searchBook(payload.queryStr)
    commit({
      type: QUERY,
      tag: 'book',
      res: book.data.subjects
    })
    /**
     * API rate limit exceeded
     * Learn more: https://developers.douban.com/wiki/?title=api_v2
     */

    // Getting book
    // request
    //   .get('https://api.douban.com/v2/book/search?q=' +
    //     payload.queryStr + '&count=3')
    //   .use(jsonp)
    //   .end((err, res) => {
    //     if (!err) {
    //       commit({
    //         type: 'query',
    //         tag: 'book',
    //         res: res.body
    //       })
    //     }
    //   })

    // Getting music
    // request
    //   .get('https://api.douban.com/v2/music/search?q=' +
    //     payload.queryStr + '&count=3')
    //   .use(jsonp)
    //   .end((err, res) => {
    //     if (!err) {
    //       commit({
    //         type: 'query',
    //         tag: 'music',
    //         res: res.body.musics
    //       })
    //     }
    //   })
  }
}

const mutations = {
  [QUERY] (state, payload) {
    switch (payload.tag) {
      case 'movie':
        state.queryRes_movie = payload.res
        break
      case 'book':
        state.queryRes_book = payload.res
        break
      case 'music':
        state.queryRes_music = payload.res
        break
      default:
        console.log('[Error]:Api is error!')
    }
  }
}

export default {
  state,
  mutations,
  actions
}
