<template>
  <div class="user-manage">
    <!-- <h2><a-icon type="line-chart" /> list</h2> -->
    <div>
      <!-- <a-button type="primary">
        Primary
      </a-button> -->
    </div>
    <div>
      <counter />
      <counter />
    </div>
    <div>
      <p 
      v-for="{label, val} in mps"
      :key="val">{{label}} - {{val}}</p>
    </div>
  </div>
</template>
<script>
import counter from '@components/common/counter'
import _ from 'lodash'
const MP = [
  {
    val: '123',
    label: '123'
  },
  {
    val: '456',
    label: '456'
  }
]
export default {
  layout: 'admin',
  components: {
    counter
  },
  data() {
    return {
      mmp: [
        {
          label: 'all',
          val: 'all'
        }
      ]
    }
  },
  computed: {
    // mps({mmp}) {
    //   let arr = _.cloneDeep(MP)
    //   return mmp.concat(arr)
    // }
  },
  created() {
    // 这个_.cloneDeep 方法找不到， 用computed 上面的counter组件也不渲染了，而写在这里，counter就渲染
    this.mps = this.mmp.concat(_.cloneDeep(MP))
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