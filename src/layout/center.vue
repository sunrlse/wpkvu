<template>
  <div>
    <Header></Header>
    <main>
      <slot></slot>
    </main>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from './Header'
import Footer from './Footer'
export default {
  name: 'center',
  components: {
    Header,
    Footer
  }
}
</script>