# wap

> My classy Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# 打包运行
$ npm run generate

# 打包test运行
$ npm run generate:test

```
框架使用的是[bootstrap-vue](https://bootstrap-vue.js.org/docs/components/tabs/)
国际化 使用[nuxt-i18n-module](https://npm.taobao.org/package/nuxt-i18n-module)
```
  #目前还没有研究出 setLanguage() 方法是怎么使用的，欢迎各位分享谈论，我是强行改变params值来实现语言切换的
```
接口调用
```
封装的axios组件
使用方式
#api/路径下新建接口文件 参考api内文件
# vue文件引入   
# post  test.call(this,{id: 11}) 
# get  test.call(this, '?id=11')
```

打包配置

```
在env.js里面配置所需的路径，然后在package.json 配置相关内容
nuxt.config.js 配置了生产环境隐藏 console 如不需要请把 drop_console改为false 
```
#### lodash 使用方式 先导入要使用的lodash组件导入方式 import _filter from 'lodash/fliter'
### [lodash参考链接](https://lodash.com/docs/4.17.11)

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

