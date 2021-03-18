<template>
  <div>
    <h2>blogs</h2>
    <section>
      <router-link to="/">Home</router-link>
    </section>
    <section>
      loading...{{per}}
      hh
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
      console.log('get list', music_list)
      let { header, data } = await this.$axios.get(music_list, {})
      console.log(header, data)
    }
  }
}
</script>