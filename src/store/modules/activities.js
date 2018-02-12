import { LOAD_MORE, GET_SINGLE_EVENT, createAsyncAction } from '@/store/actions'
import { loadMore, getSingleEvent } from '../../lib/api'

const state = {
  events: [],
  skip: 0,
  eventItem: {},
  showLoading: false
}

const getters = {}

const actions = {
  // async [LOAD_MORE] ({ commit, state }) {
  //   try {
  //     let res = await loadMore(state.skip)
  //     console.log('res', res)
  //     commit({
  //       type: `${LOAD_MORE}`,
  //       res: res.data.events
  //     })
  //     return res
  //   } catch (e) {
  //     throw e
  //   }
  // },
  [LOAD_MORE]: createAsyncAction(LOAD_MORE, async ({commit, state}) => {
    let skip = state.skip
    let res = await loadMore(skip)
    return res
  }),
  async [GET_SINGLE_EVENT] ({ commit, state }, payload) {
    try {
      console.log(payload)
      let res = await getSingleEvent(payload)
      console.log('res::::', res)
      commit({
        type: `${GET_SINGLE_EVENT}`,
        res: res.data
      })
      return res
    } catch (e) {
      throw e
    }
  }
}

const mutations = {
  [`${LOAD_MORE}_PENDING`] (state, payload) {
    state.showLoading = true
  },
  [`${LOAD_MORE}_FULFILLED`] (state, payload) {
    console.log('state.events:', state.events)
    console.log('payload: ', payload)
    state.skip += 3
    state.events = state.events.concat(payload.data.data.events)
  },
  [`${LOAD_MORE}_FAILED`] (state, payload) {
    state.showLoading = false
  },
  // [LOAD_MORE] (state, payload) {
  //   state.skip += 3
  //   state.events = state.events.concat(payload.res)
  //   console.log(payload)
  // },
  [GET_SINGLE_EVENT] (state, payload) {
    state.eventItem = payload.res
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
