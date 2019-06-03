<template>
  <div>
    <headers/>
    <b-container class="bv-example-row">
      <b-row class="pb-120">
        <b-col md="12" class="mb-5 pt-120">
          <h1 ><strong>{{ $t('More.SILUBIUM公链') }}</strong></h1>
          <p class="cl-00">{{ $t('More.集多种开放功能于一体的公链') }}</p>
        </b-col>
        <b-col md="6" class="mt-10">
          <ul>
            <li class="MoreBorder">
              <div class="clerb ">
                <span class="fs72 fl wb-20 mt013" >"</span>
                <span class="fs18 fl wb-80">{{ $t('More.创新了POS共识协议新机制SILKWORM') }}</span>
                <h1 class="posNum">1</h1>
              </div>
            </li>
            <li class="MoreBorder limg">
              <div class="clerb " >
                <span class="fs72 fl wb-20 mt013" >"</span>
                <span class="fs18 fl wb-80">{{ $t('More.发明了数据上链协议SILKSCREEN') }}</span>
                <h1 class="posNum">2</h1>
              </div>
            </li>
            <li class="MoreBorder limg2">
              <div class="clerb " >
                <span class="fs72 fl wb-20 mt013" >"</span>
                <span class="fs18 fl wb-80">{{ $t('More.可以实现基于UTXO安全模型的智能合约') }}</span>
                <h1 class="posNum">3</h1>
              </div>
            </li>
          </ul>
        </b-col>
        <b-col md="6">
          <h3>{{ $t('More.特点') }}</h3>
          <p class="fs14">{{ $t('More.主要特点有：比特币网络是目前最大的一个区块链技术的生态系统，以太坊第一次将智能合约的概念从理论变成实际，拓展了区块链技术的边界。SLU从设计之初就充分考虑了兼容性，在SLU上拥有比特币所有特性，基于EVM的智能合约可以直接在SLU上部署运行。与比特币和以太坊采用POW机制挖矿不一样，SLU提出了SILKWORM共识机制。SILKWORM在POS基础上进行了创新：') }}</p>
          <ul>
            <li class="mt-3 clerb">
              <span class="wb-8 fl"><b-badge pill variant="dark">1</b-badge></span>
              <span class="fl wb-92">{{ $t('More.以用户持有的UTXO进行挖矿，UTXO不论大小都有机会获得挖矿资格，这种方式大大减小了POW机制下的能源浪费；') }}</span>
            </li>
            <li class="mt-3 clerb">
              <span class="wb-8 fl"><b-badge pill variant="dark">2</b-badge></span>
              <span class="fl wb-92">{{$t('More.区块打包成功后，矿工会获得区块内所有交易的手续费，另外获得1SLU区块奖励，手续费和区块奖励会分5次发放，第1次及时发放，后4次在后续101-104个区块发放，这种方式提高了潜在攻击者的成本，降低了安全隐患；')}}</span>
            </li>
            <li class="mt-3 bor-be5e5e5 clerb pb-4">
              <span class="wb-8 fl"><b-badge pill variant="dark">3</b-badge></span>
              <span class="fl wb-92">{{$t('More.UTXO')}}</span>
            </li>
          </ul>
          <h3 class="mt-3">{{$t('More.创新')}}</h3>
          <p  class="fs14">{{$t('More.区块链除了具备价值传递的功能外，其去中心化、不可篡改的等特性更能解决在实体经济具体场景一些痛点，SLU的区块大小增至8M，数据直接上链1024B，智能合约承载最大量32M，并发明了数据上链协议SILKSCREEN：')}}</p>
          <ul>
            <li class="mt-3 clerb">
              <span class="wb-8 fl"><b-badge pill variant="dark">1</b-badge></span>
              <span class="fl wb-92">{{$t('More.上链数据参数通过智能合约设定，可以设置是否加密、是否授权第三方查看')}}</span>
            </li>
            <li class="mt-3 clerb">
              <span class="wb-8 fl"><b-badge pill variant="dark">2</b-badge></span>
              <span class="fl wb-92">{{$t('More.约定了数据封装格式')}}</span>
            </li>
            <li class="mt-3 bor-be5e5e5 clerb pb-4">
              <span class="wb-8 fl"><b-badge pill variant="dark">3</b-badge></span>
              <span class="fl wb-92">{{$t('More.设计了配套的数据上链和查询接口')}}</span>
            </li>
          </ul>
          <h3>{{$t('More.低成本')}}</h3>
          <p class="fs14">{{$t('More.SLU')}}</p>
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
      }
    },
    components: {
      headers: () => import('~/components/public/header.vue'),
      footers: () => import('~/components/public/footers.vue')
    }
  }
</script>

<style scoped lang="scss">
    .MoreBorder{
      width: 25rem;
      height: 10rem;
      border: 2px solid #000000;
      position: relative;
      background: #ffffff;
      div{
        padding-top: 2rem;
        padding-left: 3rem;
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
      }
      &:before{
        display: block;
        content: "";
        width: 1rem;
        height: 1rem;
        border-top:2px solid #000000;
        border-right:2px solid #000000;
        background: #ffffff;
        position: absolute;
        top: 50%;
        right: -.55rem;
        transform: rotate(45deg)
      }

    }
    .fs72{
      font-size: 72px;
    }
  .mt013{
    margin-top: -1.3rem;
  }
  .posNum{
    position: absolute;
    bottom: -2.1rem;
    font-size: 80px;
    color: #e5e5e5;
    font-weight: 900;
    left: 4%;
  }
  .limg{
    margin-top: -1.3rem;
    margin-left: 1.3rem;
    z-index: -1;
  }
  .limg2{
    margin-top: -1.3rem;
    margin-left: 2.6rem;
    z-index: -2;
  }
  .bor-be5e5e5{
    border-bottom: solid #e5e5e5 1px;
  }
</style>
