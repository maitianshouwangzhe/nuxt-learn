import Vue from 'vue'
// 注入 Vue 实例: 将内容注入Vue实例，避免重复引入，在Vue原型上挂载注入一个函数，所有组件内都可以访问(不包含服务器端)。
Vue.prototype.$debugInfo = (string) => console.log('将内容注入Vue实例', string)
