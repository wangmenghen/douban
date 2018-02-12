import { GET_SINGLE_SUBJECT } from '../actions'
import { getSingleMovie, getSingleBook } from '@/lib/api'

const state = {
  subject: {},
  classify: '',
  adImgUrl: 'http://img.hb.aicdn.com/c1dd2a72fa6412bd455868be68ca402cf9f94b84e688-WMTPtp_fw658',
  showLoading: true,
  questions: [
    {
      title: '大家为什么对国产片这么苛刻？',
      comments: '35回答'
    },
    {
      title: '有没有人喜欢凯凯王版的汤川学？',
      comments: '19回答'
    },
    {
      title: '真的有饭店的打包袋长的和优衣库一样吗？',
      comments: '11回答'
    },
    {
      title: '最后结尾 石鸿问“这道题难吗？”，唐川说“很难”，什么意思？  ?',
      comments: '7回答'
    }
  ]
}

const getters = {
  // Filtering subjectMeta
  subjectMeta: state => {
    if (state.classify === 'movie') {
      return state.subject.year + '/' +
             state.subject.genres.join(' / ') + ' / ' +
             state.subject.casts.map(item => item.name).join(' / ') + ' / ' +
             state.subject.directors.map(item => item.name).join(' / ') + ' / ' +
             state.subject.countries.join(' / ')
    } else if (state.classify === 'book') {
      return state.subject.author.join(' / ') +
             state.subject.translator.join(' / ') + ' / ' +
             state.subject.publisher + ' / ' +
             state.subject.binding + ' / ' + state.subject.pages + ' / ' +
             state.subject.price + ' / ' + state.subject.pubdate
    }
  },
  // Filtering summary
  summary: state => {
    if (state.subject.summary) {
      return state.subject.summary.slice(0, 120)
    }
  },
  // Filtering genres
  genres: state => {
    if (state.classify === 'book') {
      return state.subject.tags
    } else if (state.classify === 'movie') {
      return state.subject.genres
    }
  }
}

const actions = {
  /**
   * Getting single subject
   * new Promise((resolve, reject) => {})
   * classify: movie, book
   */
  async [ GET_SINGLE_SUBJECT ] ({commit}, payload) {
    try {
      switch (payload.classify) {
        case 'movie':
          commit({
            type: `${GET_SINGLE_SUBJECT}_PENDING`
          })
          let movie = await getSingleMovie(payload.classify, payload.id)
          commit({
            type: `${GET_SINGLE_SUBJECT}_FULFILLED`,
            classify: payload.classify,
            res: movie.data
          })
          break
        case 'book':
          commit({
            type: `${GET_SINGLE_SUBJECT}_PENDING`
          })
          let book = await getSingleBook(payload.classify, payload.id)
          commit({
            type: `${GET_SINGLE_SUBJECT}_FULFILLED`,
            classify: payload.classify,
            res: book.data
          })
          break
        default:
          console.log('[Error]:Api is error!')
      }
    } catch (e) {
      commit({
        type: `${GET_SINGLE_SUBJECT}_REJECTED`
      })
      throw e
    }
  }
}

const mutations = {
  [`${GET_SINGLE_SUBJECT}_PENDING`] (state, payload) {
    state.showLoading = true
  },
  [`${GET_SINGLE_SUBJECT}_FULFILLED`] (state, payload) {
    state.classify = payload.classify
    state.subject = payload.res
    state.showLoading = false
  },
  [`${GET_SINGLE_SUBJECT}_REJECTED`] (state, payload) {
    state.showLoading = true
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
