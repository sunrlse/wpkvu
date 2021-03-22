<template>
  <div class="admin">
    <h2>admin</h2>
    <section>
      <router-link to="/">Home</router-link>
      <router-link to="/admin/user">User</router-link>
    </section>
    <section>
      <router-view></router-view>
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
  box-sizing: border-box;
}
</style>