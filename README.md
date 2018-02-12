# vue-douban-rmz

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

# 本次培训与示例douban项目不一致的地方体现在如下四个方面：  


#### 在获取豆瓣api的方式上采用了proxyTable来解决跨域问题而不使用jsonp  

#### 目录结构划分不一样。示例douban中组件划分不够清晰，layout与view混杂在一起，当多个页头页脚的时候维护与扩展困难；api请求与状态管理vuex混用，不利于维护  

#### vuex的最佳实践不一样  
```
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
```
#### 分层管理不一致  

