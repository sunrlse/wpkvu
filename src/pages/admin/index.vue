<template>
  <div class="admin">
    <div class="breadcrumb-wrap">
      <a-breadcrumb>
        <a-breadcrumb-item
          v-for="(item,i) in breadcrumbs"
          :key="i"
        >
          <router-link :to="item.path">{{item.title}}</router-link>
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <section class="manage-container">
      <router-view></router-view>
    </section>
  </div>
</template>
<script>
export default {
  layout: 'admin',
  data() {
    return {
      breadcrumbs: []
    }
  },
  watch: {
    '$route'() {
      this.resolveBreadcrumbs()
    }
  },
  created() {
    this.resolveBreadcrumbs()
  },
  methods: {
    resolveBreadcrumbs() {
      const name = this.$route.name
      if (!name) {
        this.breadcrumbs = []
        return
      }
      const arr = name.split('__')
      if (arr.length > 1) {
        let brr = []
        arr.forEach((el,i) => {
          let prefix = i == 0 ? '' : brr[i - 1].path
          brr.push({ title: el, path: `${prefix}/${el}` })
        })
        this.breadcrumbs = brr
      } else {
        this.breadcrumbs = []
      }
    }
  }
}
</script>
<style lang="less" scoped>
.admin {
  box-sizing: border-box;
  .breadcrumb-wrap {
    padding: 10px 30px;
  }
  .manage-container {
    padding: 30px;
  }
  .ant-breadcrumb-link {
    a, a:hover {
      text-decoration: none;
    }
  }
}
</style>