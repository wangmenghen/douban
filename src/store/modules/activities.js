import { LOAD_MORE, GET_SINGLE_EVENT } from '@/store/actions'
import { loadMore, getSingleEvent } from '../../lib/api'

const state = {
  events: [],
  skip: 0,
  eventItem: {}
}

const getters = {}

const actions = {
  async [LOAD_MORE] ({ commit, state }) {
    try {
      let res = await loadMore(state.skip)
      console.log('res', res)
      commit({
        type: `${LOAD_MORE}`,
        res: res.data.events
      })
      return res
    } catch (e) {
      throw e
    }
  },
  // [LOAD_MORE]: createAsyncAction(LOAD_MORE, async ({commit, state}) => {
  //   console.log('state', state)
  //   let skip = state.skip
  //   console.log('skip', skip)
  //   let res = await loadMore(skip)
  //   console.log('res:::::', res)
  //   return res.data
  // }),
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
  // [`${LOAD_MORE}_PENDING`] (state, payload) {},
  // [`${LOAD_MORE}_FULFILLED`] (state, payload) {
  //   state.skip += 3
  //   state.events = state.events.concat(payload.res.events)
  //   console.log('state.events:', state.events)
  //   console.log('payload: ', payload)
  // },
  // [`${LOAD_MORE}_FAILED`] (state, payload) {},
  [LOAD_MORE] (state, payload) {
    state.skip += 3
    state.events = state.events.concat(payload.res)
    console.log(payload)
  },
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
