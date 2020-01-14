<template>
    <div>
      <p>{{counterNumber}}</p>
      <button @click="$store.commit('increment')" >加++</button>
      <button @click="$store.commit('decrement', 102 )">减--</button>
    </div>
</template>

<script>
    export default {
        computed:{
            counterNumber(){
                console.log('store文件中的index文件不需要this.$store.state.index.counter')
                console.log('初始化显示数据只能用计算属性！！！， 否则会出现undefined', this.$store.state.counter)
                return this.$store.state.counter
            }
        },
        mounted() {
            console.log('mounted中的', this.$store.state)
        }
    }
</script>


<style>

</style>
