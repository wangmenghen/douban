export const CURRENT_USER = 'CURRENT_USER'

export const REGISTER = 'REGISTER'

export const LOAD_MORE = 'LOAD_MORE'

export const GET_SINGLE_EVENT = 'GET_SINGLE_EVENT'

export const GET_MOVIE = 'GET_MOVIE'

export const GET_SINGLE_SUBJECT = 'GET_SINGLE_SUBJECT'

export const GET_BOOK = 'GET_BOOK'

export const GET_GROUP = 'GET_GROUP'

export const QUERY = 'QUERY'

export const createAsyncAction = (type, fn) => async ({commit, state}, payload) => {
  commit({
    type: `${type}_PENDING`,
    params: payload
  })
  try {
    let res = await fn({commit, state}, payload)
    console.log('type', type)
    console.log('res', res)
    commit({
      type: `${type}_FULFILLED`,
      data: res,
      params: payload
    })
    return res
  } catch (e) {
    commit({
      type: `${type}_FAILED`,
      params: payload
    })
    throw e
  }
}
