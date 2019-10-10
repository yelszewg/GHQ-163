<template>
  <header id="headerNav">
    <div class="headerwue">
      <img class="logo" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
      <div class="search">
        <img class="searchLogo" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png" alt="">
        <span class="searchbuttom">搜索商品，共23051款好物</span>
      </div>
      <span class="login">登录</span>
    </div>

    <div class="headerNav">
      <div class="headeritem">
        <ul class="item">
          <li><a class="active" href="javascript:">推荐</a></li>
          <li><a href="javascript:">居家生活</a></li>
          <li><a href="javascript:">服饰鞋包</a></li>
          <li><a href="javascript:">美食酒水</a></li>
          <li><a href="javascript:">个人清洁</a></li>
          <li><a href="javascript:">母婴亲子</a></li>
          <li><a href="javascript:">运动旅行</a></li>
          <li><a href="javascript:">数码家电</a></li>
          <li><a href="javascript:">礼品特色</a></li>
        </ul>
      </div>
      <div class="rightshpan">
        <span class="linear">
        </span>
        <div class="xitaright" @click="!isShow">
          <img @click="!isShow" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png" alt="">
        </div>
      </div>
      <div class="allNav" v-show="isShow">
        <p>全部频道</p>
        <ul class="allItem">
          <li><a href="javascript:">推荐</a></li>
          <li><a href="javascript:">居家生活</a></li>
          <li><a href="javascript:">服饰鞋包</a></li>
          <li><a href="javascript:">美食酒水</a></li>
          <li><a href="javascript:">个护清洁</a></li>
          <li><a href="javascript:">母婴亲子</a></li>
          <li><a href="javascript:">运动旅行</a></li>
          <li><a href="javascript:">数码家电</a></li>
          <li><a href="javascript:">全球特色</a></li>
        </ul>
      </div>
    </div>
      
    
  </header>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'headerNav',
    data() {
      return {
        isShow: false
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl";
  #headerNav
    width 100%
    position fixed
    top 0
    left 0
    z-index 200
    .headerwue
      position: relative;
      z-index: 2;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      background: #fff;
      padding: 8px 15px;
      .logo
        width 138px
        height 40px
        display: inline-block;
        margin-right: 10px;
        background-size: cover;
        background-position: center;
      .search
        display flex;
        flex-grow 1
        flex-flow row nowrap
        -webkit-box-align: center
        align-items center
        -webkit-box-pack center
        justify-content center
        height 56px
        font-size 28px
        background-color #ededed
        border-radius 4px
        color #666
        .searchLogo
          display inline-block
          vertical-align: middle
          width 28px
          height 28px
          margin-right 5px
      .login
        width 76px
        height 42px
        line-height 42px
        text-align center
        color #b4282d
        border 1px solid #b4282d
        border-radius 4px
        margin-left: 8px
        font-size 24px
    
    .headerNav
      width 100%
      height 75px
      position relative
      margin-top -1px
      background #fff
      .headeritem
        width 100%
        overflow hidden
        .item
          float left
          padding-right 150px
          display flex
          >li
            display flex
            justify-content center
            align-items center
            box-sizing border-box
            padding 0 16px
            text-align center
            color #333
            font-size 28px
            line-height 60px
            width 145px
            a.active
              box-sizing border-box
              min-width 90px
              color $themeColor
              border-bottom 6px solid $themeColor

      .rightshpan
        display flex
        flex-grow 0
        align-items center
        justify-content center
        position absolute
        top 0
        right 0
        z-index 2
        .linear
          width 6px
          height 6px
          background-image linear-gradient(to right,rgba(255,255,255,0) 0,#fff 100%)
        .xitaright
          width 100%
          height 60px
          text-align center
          background #fff
          display flex
          justify-content center
          align-items center
          >img 
            width 50px
            height 50px
            transition transform 300ms linear 
            &.is_open
              transform rotateZ(180deg)

      .allNav
        position absolute
        top 0
        left 0
        width 100%
        background #ffffff
        >p
          height 60px
          padding-left 30px
          font-size 28px
          display flex
          align-items center
        .allItem
          display flex
          flex-wrap wrap
          justify-content flex-start
          padding-left 15px
          li
            width 165px
            margin 7.5px
            padding 0 16px
            box-sizing border-box
            font-size 28px
            line-height 60px
            color #333
            background-color #fafafa
            border 2ox solid $borderBgc
            border-radius 8px
            display flex
            align-items center
            justify-content center


</style>
