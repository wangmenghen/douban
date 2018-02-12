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
```
# 在获取豆瓣api的方式上采用了proxyTable来解决跨域问题而不使用jsonp  

# 目录结构划分不一样。示例douban中组件划分不够清晰，layout与view混杂在一起，当多个页头页脚的时候维护与扩展困难；api请求与状态管理vuex混用，不利于维护  

# vuex的最佳实践不一样， 示例douban未使用常量名来管理action  

# 分层管理不一致  
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
