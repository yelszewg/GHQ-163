<template>
  <div id="app">
      <HeaderNav v-show="$route.meta.showHeader"></HeaderNav>
      <router-view></router-view>
      <Footer v-show="$route.meta.isShowFooter"></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer/Footer'
import HeaderNav from './components/HeaderNav/headernav'
export default {
  name: 'App',
  components:{
    HeaderNav,
    Footer
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>