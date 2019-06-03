<template>
    <div>
      <headers/>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        label-prev="rights"
        background="#000000"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <img
            slot="img"
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            :src="lang === 'en'? require('../static/images/index/banner_en.png') : require('../static/images/index/banner1.png')"
            alt="image slot"
          >
        </b-carousel-slide>
        <!--轮播图数量暂时隐藏-->
        <!--<div class="banner-box">{{ slide + 1 }}</div>-->
      </b-carousel>
      <b-container class="bv-example-row">
        <b-row>
          <b-col md="12" class="text-c pb-120">

            <h1 class="pt-120">{{ $t('index.silubium') }}</h1>
            <p class="pt-5">{{ $t('index.silubiumText1') }}</p>
            <p>{{ $t('index.silubiumText2') }}</p>
            <p>{{ $t('index.silubiumText3') }}</p>
            <div class="pt-5 ">
              <b-link :href="localePath('/More')"><b-button variant="black">{{ $t('index.More') }}</b-button></b-link>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <div class="bg-fafafa">
        <b-container class="bv-example-row">
          <b-row class="p1">
            <b-col md="12" class="pb-60">
              <h1 class="pt-120">{{ $t('index.technologyTitle') }}</h1>
              <ul class="mt-5">
                <li v-for="(item,index) in list" :key="index" class="mb-4 p1 curp" @click="listNum = index; listContent = item.content">
                  <img :src="listNum === index ? item.chexUrl : item.url" alt="">&nbsp;&nbsp; <span :class="{'cl-257bf2': listNum === index}">{{ item.text }}</span>
                </li>
              </ul>
            </b-col>
            <b-col  md="7" class="content">
              {{ listContent }}
            </b-col>
          </b-row>
        </b-container>
      </div>
      <b-container class="bv-example-row">
        <b-row>
          <b-col md="12" class="text-c pb-120">
            <h1 class="pt-120">{{ $t('index.SILUBIUM赋能实体经济') }}</h1>
            <p class="pt-5">{{ $t('index.区块链技术逐步将会和互联网技术一样普遍，并为我们的生活带来改变') }}</p>
          </b-col>
          <b-col class="pb-120">
            <ul class="flUl">
              <li v-for="(item,i) in silubium" :key="i" class="silubium p1">
                <img :src="item.url" alt="">
                <p>{{item.text}}</p>
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
      <div class="bg-fafafa">
        <b-container class="bv-example-row">
          <b-row class="p1">
            <b-col md="12" class="pb-60 pt-120">
              <h2>{{$t('index.全球节点')}}</h2>
              <ul class="flUl">
                <li class="nums" v-for="(item,i) in toNum(2683)" :key="i">{{ item }}</li>
              </ul>
              <img src="../static/images/index/global.png" width="100%" alt="">
            </b-col>
          </b-row>
        </b-container>
      </div>
      <footers/>
    </div>
</template>

<script>
export default {
  data () {
      return {
        slide: 0,
        sliding: null,
        listNum: 0,
        listContent: this.$t('index.SilkChain是数字资产区块链运行状态的可视化方法及浏览器'),
        list: [
          {
            text: this.$t('index.区块链浏览器Silkchain'),
            url: require('~/static/images/index/index_img01.png'),
            chexUrl: require('~/static/images/index/index_img01b.png'),
            content: this.$t('index.SilkChain是数字资产区块链运行状态的可视化方法及浏览器')
          },
          {
            text: this.$t('index.共识机制Silkworm'),
            url: require('~/static/images/index/index_img02.png'),
            chexUrl: require('~/static/images/index/index_img02b.png'),
            content: this.$t('index.Silkworm是的创新POS共识协议的新机制。Silkworm 鼓励节点在线，获得区块生产权力的同时获得利息，在线节点越多SILUBIUM越安全稳定')
          },
          {
            text: this.$t('index.数据上链协议Silkscreen'),
            url: require('~/static/images/index/index_img03.png'),
            chexUrl: require('~/static/images/index/index_img03b.png'),
            content: this.$t('index.适用于使用silkscreen协议上链数据的企业。silkscreen使用主控智能合约进行数据的安全上链')
          },
          {
            text: this.$t('index.数字货币支付Silkpay'),
            url: require('~/static/images/index/index_img04.png'),
            chexUrl: require('~/static/images/index/index_img04b.png'),
            content: this.$t('index.SilkPay是一款打通数字货币和实体世界的支付系统，通过解决用户管理多种数字货币的不便和兑换交易过程繁杂、安全性等问题，使用户支付更加方便、安全、经济，为数字货币领域提供强大的基础设施')
          }
        ],
        silubium: [
          {
            text: this.$t('index.行业级区块链解决方案'),
            url: require('~/static/images/index/index_img_sil1.png')
          },
          {
            text: this.$t('index.去中心化链上应用开发'),
            url: require('~/static/images/index/index_img_sil2.png')
          },
          {
            text: this.$t('index.商业化智能合约'),
            url: require('~/static/images/index/index_img_sil3.png')
          },
          {
            text: this.$t('index.链上链下资产互联'),
            url: require('~/static/images/index/index_img_sil4.png')
          }
        ]
      }
    },
  computed: {
    lang () {
      return this.$store.state.i18n.language
    }
  },
/*  head () {
    return {
      title:"首页",
      link: [
        { rel: 'shortcut icon', href: 'favicons.ico'}
      ]
    }
  },*/
  components: {
    headers: () => import('~/components/public/header.vue'),
    footers: () => import('~/components/public/footers.vue')
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
    toNum (num) {

      if (typeof num == "number") {
        num = num.toString()
      }
      return num.split('')
    }
  },
  mounted() {
    // this.$i18n._setLanguage('en')
  }
}
</script>

<style scoped lang="scss">
  .banner-box{
    position: absolute;
    z-index: 99;
    bottom: 0;
    right: 20%;
    width: 16%;
    height: 50px;
    line-height: 50px;
    background: #ffffff;
    text-align: center;
    font-size: 25px;
  }
  .cl-257bf2{
    color: #257bf2 !important;
    &:after{
      content: " ";
      display: block;
      width: 40px;
      height: 3px;
      background: #257bf2;
      position: absolute;
      left: -5.5rem;
      top: 50%;
    }
  }
  .content{
    background: #ffffff;
    position: absolute;
    bottom: -2.8rem;
    right: 14%;
    height: 260px;
    box-shadow: 0 0 20px #f3f0f0;
    padding: 5rem 3rem 1rem 3rem;
  }
  .silubium{
    width: 260px;
    height: 300px;
    box-shadow: 0 0 20px #f3f0f0;
    text-align: center;
    margin-right: 2rem;
    padding-top: 2.5rem;
    margin-bottom: 2rem;
  }
  .silubium p{
    position: absolute;
    bottom: 2rem;
    width: 100%;
    text-align: center;
  }
  .nums{
    background: #ffffff;
    margin-right: 0.6rem;
    padding: 0.3rem 0.5rem;
  }
  @media (max-width: 1000px) {
    .content{
      position: relative;
      bottom: 0;
      right: 0;
    }
    .silubium{
      margin-right: auto;
      margin-left: auto;
      float: none;
    }
  }
  @media (max-width: 765px) {
    .footers{
      padding-top: 3rem;
      li{
        width: 34.28%;
      }
    }
  }
</style>
