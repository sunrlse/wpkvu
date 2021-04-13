<template>
  <div class="home">
    <h2>home</h2>
    <van-row type="flex" justify="space-around">
      <van-col span="6">span: 6</van-col>
      <van-col span="6">span: 6</van-col>
      <van-col span="6">span: 6</van-col>
    </van-row>
    <div>count: {{count}}</div>
    <div>count2: {{count2}}</div>
    <!-- <div v-once>{{count}}</div> -->
    <div class="line"></div>
    <van-cell title="选择日期区间" :value="date" @click="show = true" />
    <van-calendar v-model="show" type="range" color="#1989fa" @confirm="onConfirm" />
    <div class="ln"></div>
    <div class="hairline"></div>
    <h2>多条边</h2>
    <div class="multi-hairline"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      date: '',
      count: 0,
      count2: 0,
      show: false
    }
  },
  mounted() {
    // this.counting()
  },
  methods: {
    counting() {
      setInterval(() => {
        this.count++
        setTimeout(() => {
          this.count2++
        }, 100)
      }, 1000)
    },
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      const [start, end] = date
      this.show = false
      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`
    },
  }
}
</script>
<style lang="less" scoped>
.home {
  height: 100%;
  // background-image: linear-gradient(-225deg, #D4FFEC 0%, #57F2CC 48%, #4596FB 100%);
  font-size: 18px; // Px PX 忽略
  .van-col {
    height: 50px;
    background: chocolate;
    color: @blueColor;
  }
  // 0.5px
  .ln {
    margin-top: 20px;
    margin-bottom: 20px;
    // border-bottom: 0.5PX solid #666;
    border-bottom-style: solid;
    border-bottom-color: red;
  }
  .line {
    margin-top: 100px;
    &:after {
        content: '';
        display: block;
        flex: 1;
        box-sizing: border-box;
        height: 1PX;
        border-color: #666;
        border-style: solid;
        border-width: 1PX 0 0;
        transform: scaleY(0.5);
        transform-origin: 0 0;
      }
  }
}

.multi-hairline {
  position: relative;
  width: 90%;
  margin: 0 auto;
  height: 100px;
  &:after{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      border: 1px solid #000;
      border-radius: 10px;
      box-sizing: border-box;
      width: 200%;
      height: 200%;
      transform: scale(0.5);
      transform-origin: left top;
  }
}

// svg 
.hairline {
  border-bottom: 1px solid transparent;
  .hairlineColor(blue);
  // border-image: svg(hair-border param(--color #666)) 2 2 stretch;
}
</style>