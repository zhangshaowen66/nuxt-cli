<template>
  <div>
    <headers/>
    <b-container class="bv-example-row bg-f5 mt-3 mb-5 p3x2y">
      <b-row>
        <b-col md="12" class="bg-080808 cl-ff newsTitle" >
          <b-row>
            <b-col md="1"></b-col>
            <b-col md="7">
              <h2>{{ $t('consultation.新闻动态') }}</h2>
              <p v-if="langs !== 'en'">news</p>
            </b-col>
            <b-col md="3">
              <img width="100%" src="~/static/images/news/news.png" alt="">
            </b-col>
          </b-row>
        </b-col>
        <b-col md="12" class="newList" v-for="(item,i) in list" :key="i"><b-link :to="localePath(`/consultation/News-details?newsId=${item.id}`)"  class="cl-00">{{ item.title }}</b-link></b-col>
        <b-col class="text-c mt-5" >
          <div style="display: inline-block">
            <b-pagination
              active-class="cl-33"
              v-model="currentPage"
              :total-rows="totals"
              :per-page="perPage"
              :first-text="$t('第一页')"
              :prev-text="$t('上一页')"
              :next-text="$t('下一页')"
              :last-text="$t('最后一页')"
            ></b-pagination>
          </div>
        </b-col>

      </b-row>
    </b-container>
    <footers/>
  </div>
</template>

<script>
  import getJson from '~/api/getJson'
  import getJsonList from '~/api/getJsonList'
  export default {
    data () {
      return {
        totals: 100,
        perPage: 20,
        currentPage: 1,
        list: [
          {
            content: '区块链技术如何运用到跨境交易领域？',
            url: '/'
          },
          {
            content: '区块链技术如何运用到跨境交易领域？',
            url: '/'
          }
        ]
      }
    },
    watch: {
      currentPage () {
        this.getNewsList()
      }
    },
    methods: {
      getNews() {
        getJson.call(this,'?sourceType=2')
          .then(
            res => {
              if (res.data.success) {
                this.list = res.data.rows
                this.getNewsList()
              }
            }
          )
      },
      getNewsList () {
        getJsonList.call(this, {
          newsTypeId:  this.langs === 'en'? 5 : 4,
          page: this.currentPage,
          rows: this.perPage
        })
          .then(
            res => {
              if (res.data.success) {
                this.list = res.data.rows
                this.totals = res.data.total
              }
            }
          )
      }
    },
    components: {
      headers: () => import('~/components/public/header.vue'),
      footers: () => import('~/components/public/footers.vue')
    },
    computed: {
      langs () {
        return this.$store.state.i18n.language
      }
    },
    mounted() {
      this.getNews()
    }
  }
</script>

<style scoped lang="scss">
  .p3x2y{
    padding: 2.5rem 2rem;
  }
  .newsTitle{
    border-radius: 0.3rem;
    padding-top: 4rem;
    margin-bottom: 3rem;
  }
  .newList{
    background: #ffffff;
    border-radius: 5px;
    padding: 1rem 2rem;
    margin-bottom: 1rem;
  }
</style>
