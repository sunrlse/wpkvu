<template>
  <div class="user-manage">
    <h2><a-icon type="line-chart" /> list</h2>
    <div>
      <a-button type="primary">
        Primary
      </a-button>
    </div>
    <div>
      <counter />
      <counter />
    </div>
  </div>
</template>
<script>
import counter from '@components/common/counter'
export default {
  layout: 'admin',
  components: {
    counter
  },
  data() {
    return {
      
    }
  }
}
</script>
<style lang="less" scoped>
.user-manage {
  color: #333;
  height: 2000px;
  h2 {
    // color: $blue;
  }
}
</style>