<template>
    <div>
      <h2>Home页</h2>
      <button @click="sayHello('maisui')">插件：注入Vue实例</button>
    </div>
</template>

<script>
    export default {
        methods: {
            sayHello(name){
                this.$debugInfo(name)
            },
        }
    }
</script>

<style scoped>

</style>
