<template>
    <div class="not-found-page">
        <div>page not found</div>
        <div><router-link to="/">去首页看看</router-link></div>
    </div>
</template>
<script>
export default {
    layout: 'plain'
}
</script>
<style lang="less" scoped>
.not-found-page {
    padding: 100px;
    text-align: center;
}
</style>