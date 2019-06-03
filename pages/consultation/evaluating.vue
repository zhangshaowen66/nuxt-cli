<template>
  <div>
    <headers/>
    <b-container class="bv-example-row">
      <b-row class="pb-120">
        <b-col md="12" class="mb-5">
          <h1 class="pt-120"><strong>{{ $t('consultation.第三方评测') }}</strong></h1>
        </b-col>
        <b-col md="3" class="mb-4" v-for="(item,i) in evaluat" :key="i">
          <img :src="item" alt="" width="100%">
        </b-col>
      </b-row>
    </b-container>
    <footers/>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        evaluat: [
          require('~/static/images/evaluating/evaluating.png'),
          require('~/static/images/evaluating/evaluating.png'),
          require('~/static/images/evaluating/evaluating.png'),
          require('~/static/images/evaluating/evaluating.png'),
          require('~/static/images/evaluating/evaluating.png')
        ]
      }
    },
    components: {
      headers: () => import('~/components/public/header.vue'),
      footers: () => import('~/components/public/footers.vue')
    }
  }
</script>

<style scoped lang="scss">

</style>
