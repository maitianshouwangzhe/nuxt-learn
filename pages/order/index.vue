<template>
  <div>
    <h2>Order页面</h2>
  </div>
</template>

<script>
    export default {
        mounted () {
            this.$combinedInject('works in mounted')
        },
        asyncData ({app}) {
            app.$combinedInject('works with context')
        }
    }
</script>

<style scoped>

</style>
