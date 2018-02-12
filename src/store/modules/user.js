import { REGISTER } from '@/store/actions'
import * as api from '@/lib/api'

const state = {
  login_email: '',
  login_token: '',
  login_name: '',
  temp_email: '',
  temp_token: '',
  temp_name: ''
}

const getters = {
  currentUser: state => {
    return {
      email: state.login_email,
      token: state.login_token,
      name: state.login_name
    }
  }
}

const actions = {
  async [ REGISTER ] ({ commit, state }, { email, name, pwd }) {
    commit({
      type: `${REGISTER}_PENDING`
    })
    let res = await api.register(email, name, pwd)
    commit({
      type: `${REGISTER}_FULFILLED`,
      user: res
    })
    return res
  }
}

const mutations = {
  [`${REGISTER}_PENDING`] (state, payload) {

  },
  [`${REGISTER}_FULFILLED`] (state, payload) {
    console.log(payload.user)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
