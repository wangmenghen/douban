import Vue from 'vue'
import Vuex from 'vuex'
import activities from './modules/activities'
import movie from './modules/movie'
import subject from './modules/subject'
import book from './modules/book'
import user from './modules/user.js'
import group from './modules/group'
import search from './modules/search'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    activities,
    movie,
    subject,
    book,
    user,
    group,
    search
  },
  strict: debug
})
