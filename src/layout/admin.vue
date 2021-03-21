<template>
  <div id="app-admin">
    <aside>
      menu
    </aside>
    <main>
      <Header></Header>
      <slot></slot>
      <Footer></Footer>
    </main>
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