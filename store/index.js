
export const state = () => ({
  counter: 100,
})

export const mutations = {
  increment(state){
    state.counter++
  },
  // 传递参数
  decrement(state, num){
    state.counter = state.counter - num
  },
}
