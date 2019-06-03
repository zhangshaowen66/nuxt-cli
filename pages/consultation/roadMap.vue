<template>
  <div style="overflow: hidden">
    <headers/>
    <b-container class="bv-example-row pb-120" style="overflow: hidden">
      <b-row>
        <b-col md="12" class="mb-5">
          <h1 class="pt-120"><strong>{{ $t('consultation.路线图') }}</strong></h1>
        </b-col>
        <b-col class="pt-50" id="cont">
          <div :style="{marginLeft: marLeft + 'px'}" >
            <div class="lines" :style="{width: widths + 'px'}"></div>
            <ul class="MapUl flUl" :style="{width: widths + 'px'}">
                <li  v-for="(item, index) in mapLine" class="" :class="{'mapBottom':index%2 !== 0, 'mapTop': index%2 === 0}" :key="index"  ref="lis">
                  <p v-if="index%2 !== 0" class="borlines"/>
                  <div>
                    <p>{{ item.time }}</p>
                    <p>{{ item.content }}</p>
                  </div>
                  <p class="borlines" v-if="index%2 === 0"/>
                </li>
            </ul>
          </div>
          <img src="~/static/images/roadMap/map_pre.png" v-if="marLeft !== 0"  @click="reduceLfet()" class="map_pre" alt="">
          <img src="~/static/images/roadMap/map_next.png" v-if="marLeft <= widths && contNum !== marNum && contNum > 0" @click="addLfet()" class="map_next" alt="">
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
        marLeft: 0,
        marNum: 0, // 记录点击次数
        contNum: undefined, // 总的点击次数
        widths: null, // 总的长度
        mapLine: [
          {
            time: this.$t('consultation.2018年08月'),
            content: this.$t('consultation.SILUBIUM区块链主网开源代码发布')
          },
          {
            time: this.$t('consultation.2018年03月'),
            content:  this.$t('consultation.技术研发与架构设计完成并测试运行')
          },
          {
            time: this.$t('consultation.2017年11月'),
            content: this.$t('consultation.公布SLU分配计划')
          },
          {
            time: this.$t('consultation.2017年06月'),
            content:  this.$t('consultation.开放SILUBIUM社区')
          },
          {
            time: this.$t('consultation.2017年04月'),
            content: this.$t('consultation.SLUBIUM白皮书V1')
          },
          {
            time:  this.$t('consultation.2017年04月'),
            content:  this.$t('consultation.项目技术团队到位')
          },
          {
            time: this.$t('consultation.2017年03月'),
            content: this.$t('consultation.SLUBIUM立项')
          }
        ]
      }
    },
    methods: {
      setWidths () {
        this.$nextTick(function(){
          for (let i = 0; i < this.$refs.lis.length; i++){
            if(i%2===0){
              this.$refs.lis[i].style.marginTop = -(this.$refs.lis[i].offsetHeight - 5) + 'px'
            }
            this.widths += this.$refs.lis[i].offsetWidth
          }
          // 设置总共长度
          this.widths = this.widths + 50
          console.log(this.widths);
          // 计算总共可以点击多少次
          this.contNum = Math.floor((this.widths - document.getElementById('cont').offsetWidth) / 200) + 1

        })
      },
      addLfet () {
        this.marNum = this.marNum + 1
        this.marLeft = this.marLeft - 200
      },
      reduceLfet () {
        this.marNum = this.marNum - 1
        this.marLeft = this.marLeft + 200
      }
    },
    mounted () {
      this.setWidths()
    },
    components: {
      headers: () => import('~/components/public/header.vue'),
      footers: () => import('~/components/public/footers.vue')
    }
  }
</script>

<style scoped lang="scss">
  .lines{
    height: .1rem;
    background: #000000;
    position: relative;
    min-width: 100%;
    &:after{
      position: absolute;
      left: -.6rem;
      top: -.3rem;
      display: block;
      content: " ";
      width: 0;
      height: 0;
      border-width: 6px;
      border-style: solid;
      border-color: transparent #000000 transparent transparent;
    }
  }
  .mapTop{
    text-align: center;
    max-width: 260px;
    .borlines{
      width: 2px;
      height: 4.5rem;
      background: #000000;
      display: inline-block;
      margin-top: 0.5rem;
      position: relative;
      &:after, &:before{
        position: absolute;
        display: block;
        content: " ";
        bottom: -0.25rem;
        box-shadow: 0 0 8px #000000;
        left: -120%;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 0.5rem;
        background: #000000;
      }
      &:before{
        bottom: auto;
        top: 0;
        box-shadow:none;
      }
    }
  }
  .mapBottom{

    max-width: 260px;
    text-align: center;
    margin-top: -.8rem;
    .borlines{
      width: 2px;
      height: 4.5rem;
      background: #000000;
      display: inline-block;
      margin-top: 0.5rem;
      position: relative;
      &:after, &:before{
        position: absolute;
        display: block;
        content: " ";
        bottom: -0.25rem;
        left: -120%;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 0.5rem;
        background: #000000;
      }
      &:before{
        box-shadow: 0 0 8px #000000;
        bottom: auto;
        top: 0;
      }
    }
  }
  .MapUl{
    transition: all 1s;
  }
  .map_pre,.map_next{
    position: absolute;
    top: 40%;
    left: 0;
  }
  .map_next{
    right: 0;
    left: auto;
  }
</style>
