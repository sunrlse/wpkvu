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
    '$route'() {
      // console.log('watch ', this.$route)
      this.setLayout()
      // let { layout } = val.matched[0].components.default
      // this.currentLayout = layout
    }
  },
  created() {
    // console.log(this.$route)
    this.setLayout()
  },
  methods: {
    setLayout() {
      const matched = this.$route.matched
      const len = matched.length
      // console.log(len)
      if (len) {
        let currCompLayout = matched[len - 1].components.default.layout
        if (currCompLayout) {
          this.currentLayout = currCompLayout
        } else {
          this.currentLayout = matched[0].components.default.layout || 'plain'
        }
      }
    }
  }
}
</script>