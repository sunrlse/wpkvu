<template>
  <div class="blog-wrap">
    <h2>blogs</h2>
    <section>
      <router-link to="/">Home </router-link>
    </section>
    <section>
      不了不了...{{per}}s
    </section>
  </div>
</template>
<script>
import { music_list } from '@constants/urls'
export default {
  layout: 'center',
  data() {
    return {
      list: [],
      per: 1
    }
  },
  mounted() {
    this.getList()
    setInterval(() => {
      this.per++
    }, 500);
  },
  methods: {
    async getList() {
      // console.log('get list', music_list)
      let { header, data } = await this.$axios.get(music_list, {})
      if (header && data) {
        return
      }
      // console.log(header, data)
    }
  }
}
</script>
<style lang="less" scoped>
.blog-wrap {
  color: orange;
}
</style>