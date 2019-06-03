<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
  </div>
</template>

<script>
  import test from '../../src/api/test'
  import getTest from '../../src/api/getTest'
  import otherTest from '../../src/api/otherTest'
export default {
  name: 'HelloWorld',
  mounted () {
    this.getTests()
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    getTests () {
      // get 方式请求直接拼接
      getTest.call(this, '?id=1&order=10086')
        .then(
          res => {
            if (res.code === 1) {
              console.log('请求成功')
            } else {
              console.log('请求失败')
            }
          }
        )
    },
    postTests() {
      // post 请求
      test.call(this, {
        id: 1,
        order: 10086
      })
        .then(
          res => {
            if (res.code === 1) {
              console.log('请求成功')
            } else {
              console.log('请求失败')
            }
          }
        )
    },
    other () {
      // 其他的端口号，在js文件里面配置好了后调用方式和get post方式没有去任何区别
      otherTest.call(this, {
        id: 1,
        order: 10086
      })
        .then(
          res => {
            if (res.code === 1) {
              console.log('请求成功')
            } else {
              console.log('请求失败')
            }
          }
        )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
