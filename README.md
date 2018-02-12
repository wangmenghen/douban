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

#### 目录结构划分不一样。示例douban中组件划分不够清晰，layout与view混杂在一起，当多个页头页脚的时候维护与扩展困难
   · 采用设置layout分层和嵌套路由的方式，实现不同页面页头页尾的控制
```
import Default from '@/layouts/Default'
...
   {path: '/',
      component: Default,
      children: [
        {
          path: '',
          redirect: '/home'
        },
        {
          path: 'home',
          name: 'Home',
          component: Home
        },
        ....
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
```

#### vuex的最佳实践不一样  
1.使用常量来管理action  
2.使用PENDING、FULFILLED、FAILED来统一标识action的开始、结束和异常状态  

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
```
1.api请求与状态管理vuex混用，不利于维护  
2.为了加深理解vuex，这次所有的api请求是全放入store管理中，理论上是没有错误，但是从实践上是复杂化了。在这个小项目中为每一个action都设置三个请求状态不是必要的，加大了工作量，这就是实践与理念的冲突

```
#### todo
  由于时间原因，大部分的页面还未使用element-ui组件，还存在大量的css样式，css的BEM替换也还未全部完成
