/*
*您需要同时在context，Vue实例，甚至Vuex中同时注入，您可以使用inject方法,它是plugin导出函数的第二个参数。
* 将内容注入Vue实例的方式与在Vue应用程序中进行注入类似。
* 系统会自动将$添加到方法名的前面。
* */

export default ({ app }, inject) => {
  inject('combinedInject', (string) => console.log('同时注入', string)
  )
}
