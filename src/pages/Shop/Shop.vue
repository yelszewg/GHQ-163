<template>
  <div id="shopcar">
    <div class="headerSpan">
      <span class="gouwy">购物车</span>
      <span class="juan">领券</span>
    </div>
    <div class="shopNav">
      <div class="navSpan">
        <span>30天无忧退货</span>
        <span>48小时快速退款</span>
        <span>满88免运费</span>
      </div>
      <div class="shopimg">
        
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="">
          <span>去添加点什么吧</span>
          <button>登录</button>
        </div>
        
      </div>
    
    
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #shopcar
    width 100%
    
    .headerSpan
      height 88px
      display flex
      justify-content space-between
      background-color #ffffff
      padding 0 30px
      .gouwy
        color #333
        font-size 36px
        line-height 88px
      .juan
        color #B4282D
        font-size 36px
        line-height 88px

    .shopNav
      width 100%
      padding-top 30px
      .navSpan
        font-size 24px
        color #666
        display flex
        align-items center
        justify-content space-around
      .shopimg
        text-align center
        >img
          display block
          width 248px
          height 248px
          margin 375px auto 0
        >p
          color #999
        >button
          width 480px
          height 92px
          margin 50px auto 288px
          font-size 30px
          color #fff
          background-color $themeColor

</style>