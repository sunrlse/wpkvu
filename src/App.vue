<template>
  <component :is="currentLayout">
    <router-view></router-view>
  </component>
  <!-- <Header></Header>
  <main>
  </main>
  <Footer></Footer> -->
</template>
<script>
import plain from './layout/plain'
import center from './layout/center'
import admin from './layout/admin'
export default {
  components: {
    plain,
    center,
    admin
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
    var a = 1
    var b = 2
    console.log(this.$route.matched[0].components.default)
    this.currentLayout = this.$route.matched[0].components.default.layout
  }
}
</script>