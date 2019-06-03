<template>
  <div>
    <headers/>
    <b-container class="bv-example-row bg-f5 mt-3 mb-5 p3x2y">
      <b-row class="pb-70">
        <b-col md="12">
          <p>
            <strong>{{details && details.title}}</strong>
            <b-link :to="{path: '/consultation/weekly'}" class="fr fs14 cl-00">< {{ $t('consultation.返回项目周报') }}</b-link>
          </p>
          <p>{{details && details.date}}</p>
        </b-col>
        <b-col md="12" class="mt-3 pb-5" v-html="details && details.content"></b-col>
        <b-col>
          <p>{{$t('consultation.更多动态敬请关注')}}：</p>
          <p>{{ $t('consultation.Silubium官网') }}：<a href="http://www.silubium.org/">http://www.silubium.org/</a>  </p>
          <p>{{ $t('consultation.区块链浏览器') }}：<a href="https://silkchain2.silubium.org/index">https://silkchain2.silubium.org/index</a>  </p>
        </b-col>
      </b-row>
    </b-container>
    <footers/>
  </div>
</template>

<script>
  import getCurrentNews from '~/api/getCurrentNews'
  export default {
    data () {
      return {
        details: undefined
      }
    },
    methods: {
      getDetails () {
        getCurrentNews.call(this, {
          id: this.id
        })
          .then(
            res => {
              if (res.data.success) {
                this.details = res.data.entity
              }
            }
          )
      },
    },
    components: {
      headers: () => import('~/components/public/header.vue'),
      footers: () => import('~/components/public/footers.vue')
    },
    mounted () {
      this.getDetails()
    },
    computed: {
      id () {
        return this.$route.query && this.$route.query.newsId
      }
    }
  }
</script>

<style scoped lang="scss">
  .p3x2y{
    padding: 2.5rem 2rem;
  }
  .bor-b00{
    border-bottom: 1px solid #000000;
  }
</style>
