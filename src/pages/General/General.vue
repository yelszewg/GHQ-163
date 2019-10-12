<template>
  <div class="monoHeader">
    <div class="monoHeader">
      <span class="icon-1"></span>
      <div class="headerFont">
        <span class="active">发现</span>
        <span>甄选家</span>
      </div>
      <div class="headerRight">
        <span class="icon-sousuo"></span>
        <span class="icon-3"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .monoHeader
    position fixed
    left 0
    top 0
    width 100%
    .monoHeader
      height 88px
      line-height 88px
      
      text-align center
      display flex
      justify-content space-between
      .headerFont
        
        font-size 28px
        >span 
          margin-right 15px
        &.active
          color #b4282d
          font-size 36px
          font-weight bold
      .headerRight
        height 50px
        width 46px
</style>