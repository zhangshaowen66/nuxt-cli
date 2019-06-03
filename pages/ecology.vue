<template>
  <div>
    <headers/>
    <b-container class="bv-example-row">
      <b-row>
        <b-col md="12" class="text-c pb-120">
          <h1 class="pt-120">{{ $t("ecology.什么是SLU") }}?</h1>
          <p class="pt-5">{{ $t("ecology.什么是SLUtext1") }}</p>
          <p>{{ $t("ecology.什么是SLUtext2") }}</p>
          <p>{{ $t("ecology.什么是SLUtext3") }}</p>
        </b-col>
        <b-col md="11" class="m-auto">
          <ul class="flUl">
            <li v-for="(item,i) in silubium" :key="i" class="silubium p1 " :class="{'mr-0': i === 2}">
              <img :src="item.url" alt="">
              <p>{{item.text}}</p>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
    <div class="bg-fafafa">
      <b-container class="bv-example-row">
        <b-row class="p1 pb-60">
          <b-col md="12" class="text-c">
            <h1 class="pt-120">{{ $t("ecology.SLU分布数量") }}</h1>
            <p class="pt-2 mb-5">{{ $t("ecology.SLU总量") }}</p>
            <img :src="langs === 'en'? require('~/static/images/ecology/ecology_img04_en.png') : require('~/static/images/ecology/ecology_img04.png')" class="mdImg" alt="">
          </b-col>
          <b-col md="12">
            <p class="pt-4 mb-4">{{$t('ecology.address')}}</p>
            <b-table class="text-c" hover bordered :fields="fields" :items="items"></b-table>
            <h4 class="pt-5 mb-3">{{ $t('ecology.全节点挖矿') }}</h4>
            <p>{{ $t('ecology.silkworm') }}</p>
            <ul>
              <li class="mt-3 clerb">
                <span><b-badge pill variant="dark">1</b-badge></span>
                <span>{{ $t('ecology.年利率') }}</span>
              </li>
              <li class="mt-3 clerb">
                <span><b-badge pill variant="dark">2</b-badge></span>
                <span>{{$t('ecology.基于UTXO进行pos挖矿')}}</span>
              </li>
              <li class="mt-3 clerb">
                <span><b-badge pill variant="dark">3</b-badge></span>
                <span>{{$t('ecology.再判断该UTXO是否超过30天')}}</span>
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b-container class="bv-example-row">
      <b-row class="pb-60">
        <b-col md="12" class="text-c pb-60">
          <h1 class="pt-120">{{$t('ecology.SLU应用')}}</h1>
        </b-col>
        <b-col md="12"  v-for="(item,index) in applyList" :key="index" class="mb-5">
          <h4 class="borb-eeeeee pb-3 pt-3"><strong>{{item.title}}</strong></h4>
          <b-row>
            <b-col v-for="(list,i) in item.data" :key="i" :md="i%2===0?'7':'5'">
              <h5 class="cl-257bf2 pb-3 pt-3"><strong>{{list.title}}</strong></h5>
              <ul class="cl-66">
                <li  v-for="(cont, c) in list.list"  :key="i" class="mb-1">
                  {{c+1}}. {{cont}}
                </li>
              </ul>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <footers/>
  </div>


</template>

<script>
    export default {
      data () {
        return{
          fields: [
            {
              key: 'address',
              label: this.$t('ecology.锁仓地址')
            },
            {
              key: 'amount',
              label: this.$t('ecology.锁仓数量')
            },
            {
              key: 'time',
              label: this.$t('ecology.释放时间')
            }
          ],
          items: [
            {
              address: 'SLUaAVmdobxB6uZ54cos34b7oaWxDbWgTM71',
              amount: '300',
              time: '2020'
            },
            {
              address: 'SLUbrHNARrb5TRaVAdy1wcFWnBR6fgMGoQET',
              amount: '200',
              time: '2020'
            },
            {
              address: 'SLUbW9vt8FxQ3Sa1FXNkP2hLZ65ohJsZxfvb',
              amount: '300',
              time: '2021'
            },
            {
              address: 'SLUcVtPxkuAacRcXhZZZvzNLYYyBQSEV8tRG',
              amount: '200',
              time: '2021'
            },
            {
              address: 'SLUcy7NmehL12cjv6E2CR9qVkLNG8nQDPcYQ',
              amount: '300',
              time: '2022'
            },
            {
              address: 'SLUcZAZqAyiWm2k2c7XbWgYzwsv4iTm7EAtC',
              amount: '200',
              time: '2022'
            },
            {
              address: 'SLUdHfmhYvekf9uqRgMvndM6pA34KYgrWkNh',
              amount: '300',
              time: '2023'
            },
            {
              address: 'SLUdN6LktL4Vfv3FTntGeMXqQhqjAv7TkGwN',
              amount: '200',
              time: '2023'
            },
            {
              address: 'SLUfBaM2d4e4aHowkWzNamQewAqpsJVKFqSk',
              amount: '300',
              time: '2024'
            },
            {
              address: 'SLUfidpAkzcEoB5TYYRf9Ui2eCK63Ux7C7F1',
              amount: '200',
              time: '2024'
            },
            {
              address: 'SLUhFd7fdQj5Wx29h3okCbEAiThXFhmyaNnQ',
              amount: '300',
              time: '2025'
            },
            {
              address: 'SLUhQ9fASLavrA84y6v4x4kthMKzU5w7cV2B',
              amount: '200',
              time: '2025'
            },
            {
              address: 'SLUj3bhFimMunFWhfeRMW4Gp6ePouRbYy2HQ',
              amount: '300',
              time: '2026'
            },
            {
              address: 'SLUjgz6B3eioMFQWG645GV4iCA85dmAKci4d',
              amount: '200',
              time: '2026'
            },
            {
              address: 'SLUk3yMp41nXXrXAK95stkXRu9RJR3dCyCnF',
              amount: '300',
              time: '2027'
            },
            {
              address: 'SLUNbt4hN3zwGzsVGGLypkmfeDxWcKQU2xzs',
              amount: '200',
              time: '2027'
            },
            {
              address: 'SLUQxeFzzZ7U4y6JFT9t4hDeCyMTkWvAeYeu',
              amount: '300',
              time: '2028'
            },
            {
              address: 'SLURbascjJpQ75fgsYny2FHC5PPL4i3S3PQM',
              amount: '200',
              time: '2028'
            },
            {
              address: 'SLUSdK76w3AZVysoJoSBU7VnGXFSsN9xniGk',
              amount: '300',
              time: '2029'
            },
            {
              address: 'SLUUXV1ahes5wcfpB79GmqornmRuh4Pmzowb',
              amount: '200',
              time: '2029'
            },
            {
              address: 'SLUW28Pbfqckh1xU7ANMshZZ4A7os3N3P6iX',
              amount: '300',
              time: '2030'
            },
            {
              address: 'SLUXJyGTCTZS66nWqRyWQgDcsY9CU4Z5Yh73',
              amount: '200',
              time: '2030'
            },
            {
              address: 'SLUZmvfiwEy24MrWP4sbEEHGTwuQ9VN2YYS7',
              amount: '300',
              time: '2031'
            },
            {
              address: 'SLUZoyZHz2ENAuTF42AQbkmJ6nNAf9mJgDYS',
              amount: '200',
              time: '2031'
            }
          ],
          silubium: [
            {
              text: this.$t('ecology.星客交易所平台币'),
              url: require('~/static/images/ecology/ecology_img01.png')
            },
            {
              text: this.$t('ecology.SILUBIUM区块链燃料'),
              url: require('~/static/images/ecology/ecology_img02.png')
            },
            {
              text: this.$t('ecology.星客社区全球业务价值工具'),
              url: require('~/static/images/ecology/ecology_img03.png')
            }
          ],
          applyList: [
            {
              title: this.$t('ecology.怎么获得'),
              data: [
                {
                  title: this.$t('ecology.在星客交易所可通过以下方式增加SLU'),
                  list: [
                    this.$t('ecology.币币交易用CNTY或USDT购买SLU'),
                    this.$t('ecology.活动奖励'),
                    this.$t('ecology.任务奖励'),
                    this.$t('ecology.SLU理财活动'),
                    this.$t('ecology.体验金奖励')
                  ]
                },
                {
                  title: this.$t('ecology.在SILUBIUM区块链可以通过以下方式增加SLU'),
                  list: [
                    this.$t('ecology.POS挖矿'),
                    this.$t('ecology.持币利息')
                  ]
                },
                {
                  title: this.$t('ecology.在星客社区可通过以下方式增加SLU'),
                  list: [
                    this.$t('ecology.协助完成星客社区生态中产品设计'),
                    this.$t('ecology.社群管理'),
                    this.$t('ecology.其他资源贡献者')
                  ]
                },
                {
                  title: this.$t('ecology.战略合作'),
                  list: [
                    this.$t('ecology.价值置换')
                  ]
                }
              ]
            },
            {
              title: this.$t('ecology.SLU可以在哪些场景使用'),
              data: [
                {
                  title: this.$t('ecology.在星客交易所以下场景可以使用SLU进行支付'),
                  list: [
                    this.$t('ecology.可选择用SLU进行币币交易手续费抵扣'),
                    this.$t('ecology.OTC商家保证金'),
                    this.$t('ecology.新项目的上币费'),
                    this.$t('ecology.锁仓SLU获得利息'),
                    this.$t('ecology.提币手续费'),
                  ]
                },
                {
                  title:  this.$t('ecology.在SILIBIUM区块链'),
                  list: [
                    this.$t('ecology.SLU与基于SILIBIUM开发的代币')
                  ]
                },
                {
                  title: this.$t('ecology.业务合作价值交换'),
                  list: [
                    this.$t('ecology.支付SLU获取星客社区提供的技术支持'),
                  ]
                }
              ]
            },
            {
              title: this.$t('ecology.持有SLU可享有哪些权益'),
              data: [
                {
                  title: this.$t('ecology.在星客交易所持有SLU可享有以下权益'),
                  list: [
                    this.$t('ecology.持有SLU可获得新币空投权益'),
                    this.$t('ecology.持仓SLU可享币币交易手续费折扣'),
                    this.$t('ecology.理财收益系数加持'),
                    this.$t('ecology.新资产认购权益'),
                    this.$t('ecology.投票权'),
                    this.$t('ecology.小游戏')
                  ]
                },
                {
                  title: this.$t('ecology.持有SLU可在星客社区的权益'),
                  list: [
                    this.$t('ecology.加入星客社区VIP群'),
                    this.$t('ecology.VIP5会员可参与星客社区治理'),
                    this.$t('ecology.星客社区生态中合作项目的费用折扣')
                  ]
                },
                {
                  title: this.$t('ecology.持有SLU在SilkPay中的权益'),
                  list: [
                    this.$t('ecology.持有SLU在SilkPay中的权益'),
                    this.$t('ecology.转账手续费折扣'),
                    this.$t('ecology.消费折扣'),
                    this.$t('ecology.理财收益系数')
                  ]
                },
                {
                  title: this.$t('ecology.持有SLU在SILUBIUM区块链系统中的权益'),
                  list: [
                    this.$t('ecology.主节点持币利息'),
                    this.$t('ecology.选举主节点')
                  ]
                }
              ]
            }
          ]
        }
      },
      computed: {
        langs () {
          return this.$store.state.i18n.language
        }
      },
      components: {
        headers: () => import('~/components/public/header.vue'),
        footers: () => import('~/components/public/footers.vue')
      }
    }
</script>

<style scoped>
  .silubium{
    width: 260px;
    height: 300px;
    box-shadow: 0 0 20px #f3f0f0;
    text-align: center;
    margin-right: 8rem;
    padding-top: 5rem;
    margin-bottom: 2rem;
  }
  .silubium p{
    position: absolute;
    bottom: 2rem;
    width: 100%;
    text-align: center;
  }
  @media (max-width: 1000px) {
    .silubium{
      margin-right: auto;
      margin-left: auto;
      float: none;
    }
    .mr-0{
      margin-right: auto !important;
    }
    .mdImg{
      width: 100%;
    }
  }
</style>
