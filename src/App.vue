<template>
  <div id="app">
      <m-header></m-header>
      <tab></tab>
      <router-view></router-view>
  </div>
</template>
<script type="text/esmascript-6">
  import MHeader from 'components/m-header/m-header'
  import Tab from 'components/tab/tab'
  export default{
    components:{
      MHeader,
      Tab
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  
</style>
