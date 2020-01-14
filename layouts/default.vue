<template>
  <div>
    <nuxt-link to="/">首页</nuxt-link>
    <nuxt-link to="/home">home</nuxt-link>
    <nuxt-link to="/order">order</nuxt-link>
    <nuxt-link to="/goodsList">商品</nuxt-link>
    <nuxt-link to="/users">用户</nuxt-link>
    <nuxt-link to="/counter">Vuex的用法(1)</nuxt-link>
    <nuxt-link to="/todos">Vuex的用法(2)</nuxt-link>
    <nuxt-link to="/search">search组件（使用不同的layout）</nuxt-link>

    <!--  路由路径匹配的组件，显示在这里      -->
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
