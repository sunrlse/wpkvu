<template>
  <div>
    <div>{{count}}</div>
    <button @click="increase">+</button>
  </div>
</template>
<script>
export default {
  data: {
    count: 0
  },
  methods: {
    increase() {
      this.count++
    }
  }
}
</script>