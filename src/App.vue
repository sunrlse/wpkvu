<template>
  <div>
    <component :is="currentLayout">
      <router-view></router-view>
    </component>
    <!-- <Header></Header>
    <main>
    </main>
    <Footer></Footer> -->
  </div>
</template>
<script>
import plain from './layout/plain'
import center from './layout/center'
// import Header from './layout/Header'
// import Footer from './layout/Footer'
export default {
  components: {
    plain,
    center,
    // Header,
    // Footer
  },
  data() {
    return {
      currentLayout: 'plain'
    }
  },
  watch: {
    '$route'(val) {
      console.log('watch ', val)
      let { layout } = val.matched[0].components.default
      this.currentLayout = layout
    }
  },
  created() {
    console.log(this.$route.matched[0].components.default)
    this.currentLayout = this.$route.matched[0].components.default.layout
  }
}
</script>