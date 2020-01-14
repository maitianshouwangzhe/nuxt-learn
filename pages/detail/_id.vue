<template>
    <div>
      <h2>动态路由传递过来的参数为：{{$route.params.id}}</h2>
      <h1>
        {{detail.price}} 和 {{detail.name}}
      </h1>
    </div>
</template>

<script>
  import axios from "axios";
    export default {
        // 只有进入详情页面时，才发送ajax请求
        asyncData({params}){
            return axios.get('/mockData/test.json')
                .then((res)=>{
                    console.log('请求的返回值', res.data)
                    return {
                        detail: res.data
                    }
                })
        }
    }
</script>

<style scoped>

</style>
