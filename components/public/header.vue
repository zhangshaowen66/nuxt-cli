<template>
  <b-navbar toggleable="lg" type="dark" variant="000">
    <b-navbar-brand :href="localePath('/')">
      <img src="@/static/images/logo.png" alt="Kitten">
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item :href="item.url" :disabled="index === 0 ? false : item.url === '/'"  v-for="(item,index) in navs" :key="index"><span class="px-3" :class="{'cl-257bf2':routes === localePath(item.url)}">{{item.title}} </span></b-nav-item>
        <b-nav-item-dropdown right >
          <!-- Using 'button-content' slot -->
          <template slot="button-content">{{ $t("headers.资讯")}}</template>
          <b-dropdown-item  :href="localePath(item.url)" v-for="(item,index) in navDropdown" :key="index"> <span class="px-3" :class="{'cl-257bf2':routes === localePath(item.url)}">{{item.text}}</span></b-dropdown-item>
        </b-nav-item-dropdown>
        <!--语言切换-->
        <b-nav-item-dropdown  right  class="bg-000">
          <template slot="button-content"><img :src="lang[langs].url"> {{ lang[langs].title }}</template>
          <b-dropdown-item href="Javascript:;" v-for="(item, index) in lang" @click="setLang(item.url, item.title, item.lang)" :key="index"><img :src="item.url" alt=""> {{item.title}}</b-dropdown-item>
        </b-nav-item-dropdown>


      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  export default {
    data () {
      return {
        navs: [
          {
            title: this.$t('headers.首页'),
            url: this.localePath('/')
          },
          {
            title: this.$t('headers.钱包下载'),
            url: this.localePath('/wallet')
          },
          {
            title: this.$t('headers.区块链浏览器'),
            url: 'http://silkchain.silubium.org/'
          },
          {
            title: this.$t('headers.开发者计划'),
            url: 'https://github.com/SilubiumProject/slucore'
          },
          {
            title: this.$t('headers.SLU生态'),
            url: this.localePath('/ecology')
          }
        ],
        langUrl: require('~/static/images/zh.svg'),
        langText: '简体中文',
        lang: {
          'zh-CN': {
            title: '简体中文',
            lang: 'zh-CN',
            url: require('~/static/images/zh.svg')
          },
          'en': {
            title: 'English',
            lang: 'en',
            url: require('~/static/images/en.svg')
          }
        },
        navDropdown: [
          {
            text: this.$t('headers.项目周报'),
            url: '/consultation/weekly'
          },
          {
            text: this.$t('headers.路线图'),
            url: '/consultation/roadMap'
          }
          /*{
            text: this.$t('headers.第三方评测'),
            url: '/consultation/evaluating'
          },
          {
            text: this.$t('headers.新闻动态'),
            url: '/consultation/News'
          }*/
        ]
      }
    },
    computed: {
      langs () {
        return this.$store.state.i18n.language
      },
      routes () {
        return this.$route.path
      }
    },
    methods: {
      setLang (url, text, lang) {
        let _this = this
        let quer = _this.$route.query
        this.$router.push({params: {lang: this.i18nLangParam(lang)}, query: quer})
        this.$store.commit('setLanguage',_this.$route.params.lang)
        // console.log(this.$store.state.i18n,'i18n');
        this.langUrl = url
        this.langText = text
      }
    }
  }
</script>

<style scoped>

</style>
