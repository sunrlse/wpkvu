<template>
  <div id="app-admin" class="flex">
    <aside>
      menu
    </aside>
    <div id="container" class="flex">
      <Header></Header>
      <main>

        <slot></slot>
      </main>
    </div>
  </div>
</template>
<script>
import Header from './Header'
import Footer from './Footer'
export default {
  name: 'admin',
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="scss" scoped>
@import url('@style/admin.scss');
#app-admin {
  height: 100%;
  aside {
    width: 200px;
    border-right: 1px solid #999;
  }
  #container {
    flex: 1;
    flex-direction: column;
  }
  main {
    flex: 1;
    overflow: auto;
  }
}
</style>