<template>
  <div class="home">
    <h2>home</h2>
    <section>
      <router-link to="/blog">Blog</router-link>
    </section>
  </div>
</template>
<script>
export default {
  layout: 'plain',
}
</script>
<style lang="scss" scoped>
.home {
  background-image: linear-gradient(-225deg, #D4FFEC 0%, #57F2CC 48%, #4596FB 100%);
}
</style>