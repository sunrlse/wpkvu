<template>
  <div>
    <div>{{count}}</div>
    <button @click="increase">+</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increase() {
      this.count++
    }
  }
}
</script>