<template>
  <ul>
    <li v-for="(todo, index) in todosList" :key="index">
      <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="deleteTodo(index)">删除</button>
    </li>
    <li><input placeholder="请输入内容" @keyup.enter="addTodo"></li>
  </ul>
</template>

<script>
    import {mapMutations } from 'vuex'

    export default {
        computed: {
            todosList () {
                return this.$store.state.todos.list
            }
        },
        methods: {
            addTodo (e) {
                this.$store.commit('todos/add', e.target.value)
                e.target.value = ''
            },
            // 执行mutations
            ...mapMutations({
                toggle: 'todos/toggle'
            }),

            // 删除todo
            deleteTodo(index){
                this.$store.commit('todos/remove', index)
            }
        }
    }
</script>

<style>
  .done {
    text-decoration: line-through;
  }
</style>
