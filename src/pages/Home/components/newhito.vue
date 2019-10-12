<template>
  <div class="newhito">
    <div class="newContent">
      <div class="newHeader">
        <span>新人专享礼</span>
        <div class="newImg">
          <div class="imgLeft">
            <span>新人专享礼包</span>
            <img src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'newhito'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  .newhito
    margin-top 20px
    .newContent
      background-color #fff
      .newHeader
        height 90px
        line-height 90px
        text-align center
        >span 
          color #333333
          font-size 32px
      .newImg
        .imgLeft
          margin-left 15px
          display flex
          flex-direction column
          width 343px
          height 434px
          >span 
          >img 
            width 258px
            height 257px
</style>

