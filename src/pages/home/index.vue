<template>
  <div class="home">
    <h2>home</h2>
    <van-row type="flex" justify="space-around">
      <van-col span="6">span: 6</van-col>
      <van-col span="6">span: 6</van-col>
      <van-col span="6">span: 6</van-col>
    </van-row>
    <div class="line"></div>
    <van-cell title="选择日期区间" :value="date" @click="show = true" />
    <van-calendar v-model="show" type="range" color="#1989fa" @confirm="onConfirm" />
    <div class="ln"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      date: '',
      show: false
    }
  },
  methods: {
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
  font-size: 18Px; // Px PX 忽略
  .van-col {
    height: 50px;
    background: chocolate;
  }
  .ln {
    margin-top: 20px;
    border-bottom: 1PX solid #666;
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
      }
  }
}
</style>