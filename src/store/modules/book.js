import { GET_BOOK } from '../actions'
import { getBook } from '@/lib/api'

const state = {
  novel: [],
  reality: [],
  travel: [],
  bookTags: [
    {
      title: '不可饶恕的女人们',
      href: 'https://m.douban.com/doulist/35573',
      color: '#42BD56'
    },
    {
      title: '爱欲书',
      href: 'https://m.douban.com/doulist/38088147',
      color: '#FF4055'
    },
    {
      title: '他们还写侦探小说',
      href: 'https://m.douban.com/doulist/645579',
      color: '#4F9DED'
    },
    {
      line: true
    },
    {
      title: '人生识字始忧患',
      href: 'https://m.douban.com/doulist/192653',
      color: '#CC3344'
    },
    {
      title: '詩歌書店',
      href: 'https://m.douban.com/doulist/89925',
      color: '#FFAC2D'
    },
    {
      title: '尝试理解人类变化无常不可测心理相关小荐',
      href: 'https://m.douban.com/doulist/45361809',
      color: '#3BA94D'
    }
  ]
}

const actions = {
  /**
   * Getting books
   * q: 虚构类, 非虚构类, 旅行
   * count: 8
   */
  async [GET_BOOK] ({ commit }) {
    try {
      let novelBook = await getBook('虚构类', 8)
      commit({
        type: GET_BOOK,
        tag: 'novel',
        res: novelBook.data.books
      })

      let realityBook = await getBook('非虚构类', 8)
      commit({
        type: GET_BOOK,
        tag: 'reality',
        res: realityBook.data.books
      })

      let travelBook3 = await getBook('旅行', 8)
      commit({
        type: GET_BOOK,
        tag: 'travel',
        res: travelBook3.data.books
      })
    } catch (e) {
      throw e
    }
  }
  // [GET_BOOK]: createAsyncAction(GET_BOOK, async ({commit, state}, { type = '虚构类', count = 8 }) => {
  //   let res = await getBook(type, count)
  //   return res
  // })
}

const mutations = {
  [GET_BOOK] (state, payload) {
    switch (payload.tag) {
      case 'novel':
        state.novel = payload.res
        break
      case 'reality':
        state.reality = payload.res
        break
      case 'travel':
        state.travel = payload.res
        break
      default:
        state.novel = payload.res
    }
  }
}

export default {
  state,
  mutations,
  actions
}
