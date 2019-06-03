<template>
  <div>
    <headers/>
    <b-container class="bv-example-row bg-f5 mt-3 mb-5 p3x2y">
      <b-row class="pb-70">
        <b-col md="12">
          <p><strong>{{details && details.title}}</strong> <b-link :to="localePath('/consultation/News')" class="fr fs14 cl-00">< {{ $t('consultation.返回新闻列表')}}</b-link></p>
          <p>{{details && details.date}}</p>
        </b-col>
        <b-col md="12" class="mt-3 bor-b00 pb-5" v-html="details && details.content"></b-col>
        <b-col md="6" class="mt-4"> <p class="fl" v-if="pres">{{ $t('consultation.上一篇')}}：<b-link @click="setDetails(pres.id)">{{ pres && pres.title }} </b-link></p></b-col>
        <b-col md="6" class="mt-4"><p class="fr" v-if="nexts">{{ $t('consultation.下一篇')}}： <b-link @click="setDetails(nexts.id)">{{ nexts && nexts.title }}</b-link></p></b-col>
      </b-row>
    </b-container>
    <footers/>
  </div>
</template>

<script>
  import getCurrentNews from '~/api/getCurrentNews'
  import getNextOrPreNews from '~/api/getNextOrPreNews'
  export default {
    data () {
      return {
        details: undefined,
        nexts: undefined,
        pres: undefined
      }
    },
    computed: {
      id () {
        return this.$route.query && this.$route.query.newsId
      }
    },
    methods: {
      getDetails (id) {
        getCurrentNews.call(this, {
          id: id
        })
          .then(
            res => {
              if (res.data.success) {
                this.details = res.data.entity
              }
            }
          )
        // 获取下一篇
        getNextOrPreNews.call(this, {
          newsId: id,
          newsTypeId: 1,
          operation: 'next'
        }).then(
          res => {
            if (res.data.success) {
              this.nexts = res.data.entity
            }
          }
        )
        // 获取上一篇
        getNextOrPreNews.call(this, {
          newsId: id,
          newsTypeId: 1,
          operation: 'pre'
        }).then(
          res => {
            if (res.data.success) {
              this.pres = res.data.entity
              console.log(res.data.entity,'aaaaaaaaaaaaaaaaaaaaa')
            }
          }
        )
      },
      setDetails (id) {
        this.getDetails(id)
      }
    },
    components: {
      headers: () => import('~/components/public/header.vue'),
      footers: () => import('~/components/public/footers.vue')
    },
    mounted() {
      this.getDetails(this.id)
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
