export default ({ app }, inject) => {
  // 注入 context
  // 只要您获得context，你就可以使用该函数（例如在asyncData和fetch中获得了context）
  app.sortFunc = arr => arr.sort()
}
