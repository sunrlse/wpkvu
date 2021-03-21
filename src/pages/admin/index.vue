<template>
  <div class="admin">
    <h2>admin</h2>
    <section>
      <router-link to="/">Home</router-link>
    </section>
  </div>
</template>
<script>
export default {
  layout: 'admin',
}
</script>
<style lang="scss" scoped>
.admin {
  background: rgba(0,0,0,.5);
}
</style>