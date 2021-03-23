<template>
  <div class="home">
    <h2>home</h2>
    <section>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/admin">Admin</router-link>
    </section>
  </div>
</template>
<script>
export default {
  layout: 'plain',
}
</script>
<style lang="less" scoped>
.home {
  height: 100%;
  background-image: linear-gradient(-225deg, #D4FFEC 0%, #57F2CC 48%, #4596FB 100%);
  h2 {
    margin-bottom: 50px;
    padding-top: 20px;
    text-align: center;
  }
  section {
    text-align: center;
    a {
      margin: 0 10px;
      font-size: 18px;
    }
  }
}
</style>