<template>
    <div v-wechat-title="$route.meta.title">
      <router-view></router-view>
    </div>
</template>
<script>
export default {
  components: {
   
  },
  data() {
    return {
      
    }
  },
  watch: {
    '$route'() {
      
    }
  },
  created() {
    
  },
  methods: {

  }
}
</script>