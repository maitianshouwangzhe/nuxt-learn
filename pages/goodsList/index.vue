<template>
    <div>
      商品列表页面
      <li v-for="(item, index) in nameList" :key="index">
        <nuxt-link :to="'/detail/' + item.id ">{{item.phone}}</nuxt-link>
      </li>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                nameList: [
                    {id: 101, phone: 'mi86', price: '6666'},
                    {id: 102, phone: 'iPhoto86', price: '555'},
                    {id: 103, phone: 'oppo', price: '66'},
                ]
            }
        },
        asyncData(context){
            const arr = context.app.sortFunc([1,6,3,8,9,0])
            console.log('注入context', arr)
        },
    }
</script>

<style scoped>

</style>
