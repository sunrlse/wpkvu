<template>
  <div class="user-manage">
    <!-- <h2><a-icon type="line-chart" /> list</h2> -->
    <div>
      <!-- <a-button type="primary">
        Primary
      </a-button> -->
    </div>
    <div>{{com}}</div>
    <hr>
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
      co: 1,
      mmp: [
        {
          label: 'all',
          val: 'all'
        }
      ]
    }
  },
  computed: {
    com() {
      let co = this.co
      let n = 10
      setTimeout(() => {
        n = 100
      return co + n
      }, 100);
      return co + n
    }
    // mps({mmp}) {
    //   let arr = _.cloneDeep(MP)
    //   return mmp.concat(arr)
    // }
  },
  created() {
    // 这个_.cloneDeep 方法找不到， 用computed 上面的counter组件也不渲染了，而写在这里，counter就渲染
    this.mps = this.mmp.concat(_.cloneDeep(MP))
  },
  mounted() {
    this.test()
  },
  methods: {
    async getlist() {
      let list = [12,3]
      // console.log('async task ')
      await this.moni() // 这里有await  test方法才会10秒后执行到await后面，去掉await ，test会立即执行完
      // console.log('async 异步任务结束')
    },
    moni() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([true, true]) 
        }, 10000);
      })
    },
    async test() {
      // console.log('test start')
      let res = this.getlist()
      // console.log(res)
      // console.log('test end')
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