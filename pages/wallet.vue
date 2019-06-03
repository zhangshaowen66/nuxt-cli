<template>
    <div>
      <headers/>
      <b-container class="bv-example-row">
        <b-row>
          <b-col md="12" class="mb-5">
            <h1 class="pt-120"><strong>{{ $t('headers.钱包下载') }}</strong></h1>
          </b-col>
          <b-col md="2"></b-col>
          <b-col md="8"><img src="~/static/images/wallet/wallet.png" class="mdImg" alt=""></b-col>
        </b-row>
        <b-row class="pb-70 pt-3 text-c">
          <b-col md="3" v-for="(item, i) in downlods" :key="i">
            <img :src="item.img" alt="">
            <p>{{ item.text }}</p>
            <b-button variant="outline-dark" size="sm" class="mt-2"><b-link :to="{path: item.url}"  :disabled="item.url === '/'" class="walletA">{{ item.butText }}</b-link></b-button>
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
          downlods: [
            {
              img: require('~/static/images/wallet/wallet_ios.png'),
              text: this.$t('wallet.仅IOS用户适用'),
              butText: this.$t('wallet.下载SILUBIUM钱包'),
              url:  'http://update.silubium.org/'
            },
            {
              img: require('~/static/images/wallet/wallet_android.png'),
              text: this.$t('wallet.仅Android用户适用'),
              butText: this.$t('wallet.下载SILUBIUM钱包'),
              url:  'http://update.silubium.org/'
            },
            {
              img: require('~/static/images/wallet/wallet_windows.png'),
              text: this.$t('wallet.仅Windows用户适用'),
              butText: this.$t('wallet.下载SILUBIUM钱包'),
              url:  'http://update.silubium.org/'
            },
            {
              img: require('~/static/images/wallet/wallet_linux.png'),
              text: this.$t('wallet.仅Linux用户适用'),
              butText: this.$t('wallet.下载SILUBIUM钱包'),
              url:  'http://update.silubium.org/'
            }
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
  .walletA{
    color: #343a40;
    &:hover{
      color: #ffffff;
    }
  }
  @media (max-width: 1000px) {
    .mdImg{
      width: 100%;
    }
  }
</style>
