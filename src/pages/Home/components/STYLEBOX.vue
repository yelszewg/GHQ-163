<template>
  <div class="box">
    <div class="boxItem">
      <ul v-for="(item, index) in homeData.homeData.kingKongModule.kingKongList" :key="index">
        <li >
          <img :src="item.picUrl"  alt="">
          <span>{{item.text}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'stylebox',
  computed: {
    ...mapState({
      homeData: state => state.home.homeData
    })
   
  },
  mounted() {
    this.$store.dispatch("getHomeData")
     
    },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .box
    background-color #fff
    .boxItem
      display flex
      flex-wrap wrap
      justify-content center
      >ul
        display flex
        flex-wrap wrap
        justify-content space-between
        >li
          display flex
          flex-direction column
          align-items center
          margin 15px
          >img 
            width 110px
            height 110px
            margin-bottom 10px
          >span 
            color #333
            font-size 24px
</style>