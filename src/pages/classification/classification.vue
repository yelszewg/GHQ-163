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
          <li v-for="(item, index) in categoryData" :key="index"
              :class="{active:categoryData[curIndex]===item}"
          >{{item.name}}</li>
          

        </ul>
      </div>
      <div class="navContent" v-if="categoryData[curIndex]">
        <div class="imgItem">
          <img :src="categoryData[curIndex].wapBannerUrl" alt="">
        </div>
        <ul>
          <li >
            <div v-for="(item, index) in categoryData[curIndex].subCateList" :key="index">
              <img :src="item.wapBannerUrl" alt="">
              <span>{{item.name}}</span>
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
      categoryData: store => store.category.categoryData
    })
  },
 

  mounted() {
    

    this.$store.dispatch('getCategoryData')
  
  },
  watch: {
    deep: true,
    categoryData() {
      this.$nextTick(()=>{
        new BScroll('.leftItem',{
          click: ture,
      })
      }) 
    }
    
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
            display flex
            flex-wrap wrap
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