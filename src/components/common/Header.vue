<template>
  <header>
    <span class="header-title">{{headerTitle}}</span>
    <router-link to="/">home</router-link>
  </header>
</template>
<script>
export default {
  props: {
    headerTitle: {
      type: String,
      default: 'Forward Power'
    }
  }
}
</script>
<style lang="less" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  height: 60px;
  box-shadow: 1px 1px 5px rgba(0,0,0,.3);
  .header-title {
    font-size: 30px;
    line-height: 30px;
  }
}
</style>