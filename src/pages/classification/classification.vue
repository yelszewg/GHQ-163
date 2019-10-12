<template>
  <div class="fenlei">
    <div class="headerTop">
      <div class="searchHeader">
        <div class="search">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png" alt="">
          <span>搜索商品，共23218款好物</span>
        </div>
      </div>
    </div>
    <div class="navLeft">
      <div class="leftItem">
        <ul class="itemUl">
          <li 
            
          >{{}}</li>
          

        </ul>
      </div>
      <div class="navContent">
        <div class="imgItem">
          <img src="https://yanxuan.nosdn.127.net/01467535cd09249bd5cf0ae110845892.jpg?imageView&quality=75&thumbnail=0x196" alt="">
        </div>
        <ul>
          <li>
            <div>
              <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" alt="">
              <span>明星商品低至69元</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
export default {
  data() {
    return {
      curIndex: 0
    }
  },
  name: 'class',
  computed: {
    ...mapState({
      categoryData: store => store.classification.categoryData
    })
  },
 

  mounted() {
    this.$nextTick(() => {
      new BScroll('.leftItem',{
        click: true,
        scrollY: true
      })
    })

    this.$store.dispatch('getcategoryData')
  
  },
  watch: {
   
    
  },

}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl";
  .fenlei
    width 100%
    padding-top 88px

    .headerTop
      position fixed
      top 0
      left 0
      height 88px
      width 100%
      border-bottom 1px solid #eeeeee
      background-color #ffffff
      display flex
      align-items center
      justify-content center

      .searchHeader
        width 675px
        height 56px
        border-radius 8px
        background-color #ededed
        display flex
        align-items center
        justify-content center
        
        .search
          display flex
          align-items center
          >img 
            width 28px
            height 28px
            margin-right 10px
          >span 
            font-size 28px
            color #666

     .navLeft
      width 100%
      .leftItem
        position fixed
        left 0
        top 88px
        width 162px
        max-height 2200px
        border-right 1px solid #eeeeee
        .itemUl
          display flex
          flex-direction column
          width 100%
          height 2200px
          >li
            display flex
            justify-content center
            width 162px
            height 50px
            font-size 28px
            line-height 50px
            text-align center
            margin-top 30px
            color #333
            &:first-child
              margin-top 20px
            &.active
              color #ab2b2b
              border-left 6px solid #ab2b2b

      .navContent
        float right 
        width 528px
        box-sizing border-box
        font-size 28px
        .imgItem
          >img 
            width 470px
            height 192px
        >ul
          width 528px
          margin-top 15px
          display flex
          flex-wrap wrap
          >li
            width 144px
            height 216px
            margin-right 30px
            >div
              >img 
                width 144px
                height 144px
              >span
                width 144px
                height 72px
                text-align center
                font-size 24px

</style>