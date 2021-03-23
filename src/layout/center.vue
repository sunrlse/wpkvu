<template>
  <div id="app-center">
    <Header header-title="Dog Blog"></Header>
    <main>
      <slot></slot>
    </main>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '@components/common/Header'
import Footer from '@components/common/Footer'
export default {
  name: 'center',
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="less" scoped>
main {
  padding: 30px;
  min-height: calc(100vh - 100px);
}
</style>