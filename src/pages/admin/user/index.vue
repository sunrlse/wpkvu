<template>
  <div class="user-manage">
    <h2>user</h2>
    <section>
      <router-link to="/admin">Admin Sys</router-link>
    </section>
    <div>
      <Counter />
      <hr>
      <Counter />
    </div>
  </div>
</template>
<script>
import Counter from '@components/common/Counter'
export default {
  // layout: 'admin'
  components: {
    Counter
  }
}
</script>
<style lang="scss" scoped>
.user-manage {
  color: #333;
  height: 2000px;
}
</style>