export const state = () => ({
  list: []
})

export const mutations = {
  add (state, text) {
    state.list.push({
      text,
      done: false
    })
  },
  remove (state,  index) {
    console.log('操作删除todo的下标', index)
    state.list.splice(index, 1)
  },
  toggle (state, todo) {
    todo.done = !todo.done
  }
}
