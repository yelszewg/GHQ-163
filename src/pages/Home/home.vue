<template>
  <div class="header">
    <div class="swipercontent">
      <div class="swiperItem" >
        <img src="https://yanxuan.nosdn.127.net/bec4a597a9aed55605eeb7c0c7710f9b.jpg?imageView&quality=75&thumbnail=750x0" alt="">
      </div>
    </div>
    <div class="publicity">
      <ul class="publicityItem">
        <li>
          <span>网易自营品牌</span>
        </li>
        <li>
          <span>30天无忧退货</span>
        </li>
        <li>
          <span>48小时快速退款</span>
        </li>
      </ul>
      
    </div>
    
    <Stylebox></Stylebox>
    <div class="imgcenter">
      <img src="https://yanxuan.nosdn.127.net/df012027a9bd3c0b0e5779c11b814180.png" alt="">
    </div>
  </div>
  
</template>

<script>
import Stylebox from './components/STYLEBOX.vue'
import newhito from './components/newhito'
import '../../common/swiper/swiper.css'
import Swiper from 'swiper'
import {mapState} from 'vuex'
export default {
  name: 'home',
  
  
  components: {
    Stylebox,
  },
  data() {
    return {
      isImg: [
        'https://yanxuan.nosdn.127.net/647c2450daf2874ae5611a504e36fbef.jpg?imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/0f27264fcef20e1dce16d2c92f649072.png?imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/cb5ee6a686edfb4ad4cfde1bf98c0f39.jpg?imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/8d2af3ab55bf51d5ac03e5d9c6fa1fc4.jpg?imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/a9827ac1ad9c54b31cda1debf38c3414.jpg?imageView&quality=75&thumbnail=750x0'
      ]
    }
  },
  mounted() {
    new Swiper('swipercontent',{
      autoplay: true ,
      loop: true,
      pagination: {

      }
    })
  },

}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header
    margin-top 150px
    background-color #ededed
    .swipercontent
      width 100%
      .swiperItem
        >img 
          width 100%

    .publicity
      background-color #fff
      height 72px
      .publicityItem
        display flex
        justify-content space-around
        >li
           
          >img 
            width 32px
            height 32px
          >span 
            font-size 24px
            line-height 72px
            color #333

    .imgcenter
      height 160px
      margin-bottom 30px
      color #fff
      >img 
        width 100%
</style>