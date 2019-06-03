<template>
    <div class="bg-000">
      <b-container class="bv-example-row">
        <b-row>
          <b-col md="12" class="pb-120">
            <ul class="flUl footers">
              <li v-for="(item,index) in footers" :key="index">
                <p class="cl-257bf2 mb-3">{{item.title}}</p>
                <b-link :href="list.url" :disabled="list.url == '/'"  v-for="(list,i) in item.list" :key="i"><p class="cl-ff fs14 mb-2">{{list.text}}</p></b-link>
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </div>
</template>

<script>
    export default {
        data () {
          return{
            footers: [
              {
                title: this.$t('footers.链接'),
                list: [
                  {
                    text: this.$t('footers.星客交易所'),
                    url: 'https://www.silktraderdk.net'
                  },
                  {
                    text: this.$t('footers.星客社区'),
                    url: 'http://silk.bi/#/product/silktrader'
                  },
                  {
                    text: this.$t('footers.SLU白皮书下载'),
                    url: 'https://silktraderpub.oss-cn-hongkong.aliyuncs.com/appdown/SlbWhitePaper.pdf'
                  }
                ]
              },
              {
                title: this.$t('headers.钱包下载'),
                list: [
                  {
                    text: this.$t('footers.进入下载'),
                    url: 'http://update.silubium.org/'
                  }
                  /*{
                    text: this.$t('footers.iOS下载'),
                    url: 'http://update.silubium.org/'
                  },
                  {
                    text: this.$t('footers.Android下载'),
                    url: 'http://update.silubium.org/'
                  },
                  {
                    text: this.$t('footers.Windows下载'),
                    url: 'http://update.silubium.org/'
                  },
                  {
                    text:  this.$t('footers.Linux下载'),
                    url: 'http://update.silubium.org/'
                  }*/
                ]
              },
              {
                title: this.$t('headers.区块链浏览器'),
                list: [
                  {
                    text: this.$t('footers.进入浏览器'),
                    url: 'http://silkchain.silubium.org/'
                  }
                ]
              },
              {
                title: this.$t('headers.开发者计划'),
                list: [
                  {
                    text: 'GitHub',
                    url: 'https://github.com/SilubiumProject/slucore'
                  }
                ]
              },
              {
                title: this.$t('headers.SLU生态'),
                list: [
                  {
                    text: this.$t('footers.进入SLU生态'),
                    url: this.localePath('/ecology')
                  }
                ]
              },
              {
                title: this.$t('headers.资讯'),
                list: [
                  {
                    text:  this.$t('headers.项目周报'),
                    url: this.localePath('/consultation/weekly')
                  },
                  {
                    text: this.$t('headers.路线图'),
                    url: this.localePath('/consultation/roadMap')
                  }/*,
                  {
                    text: this.$t('headers.第三方评测'),
                    url: this.localePath('/consultation/evaluating')
                  },
                  {
                    text: this.$t('headers.新闻动态'),
                    url: this.localePath('/consultation/News')
                  }*/
                ]
              },
              {
                title: this.$t('footers.联系我们'),
                list: [
                  {
                    text: this.$t('footers.邮箱') + '：service@silktradervip.net',
                    url: '/'
                  }
                ]
              }
            ]
          }
        }
    }
</script>

<style scoped lang="scss">
  .footers{
    padding-top: 3rem;
    li{
      width: 14.28%;
    }
  }
  @media (max-width: 1000px) {
    .footers{
      padding-top: 3rem;
      li{
        width: 24.28%;
      }
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
