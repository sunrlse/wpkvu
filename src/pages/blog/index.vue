<template>
  <div class="blog-wrap">
    <h2>blogs</h2>
    <section>
      <router-link to="/">Home </router-link>
    </section>
    <section>
      不了不了...{{per}}s
    </section>
    <section>
      <button @click="req">请求</button>
      <input type="text" placeholder="input...">
      <div class="boss">
        <span>1</span>
        <span>2</span>
      </div>
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
    },
    req() {
      this.$axios.get('/wx-api/abc')
      .then(res => {
        // console.log(res)
      })
    }
  }
}
</script>
<style lang="less" scoped>
.blog-wrap {
  color: orange;
  input {
    
  }
  input::-webkit-input-placeholder {
    color: aqua;
  }
  .boss {
    display: flex;
    align-items: center;
    justify-content: space-around;
    span {
      flex: 1;
      background: chartreuse;
    }
    span:last-of-type {
      background: chocolate;
    }
  }
}
</style>