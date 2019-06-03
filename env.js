
module.exports = {
  dev: {
    MODE: 'development',
    ENV_API: {
      host: 'http://172.16.1.0:8085/portal/deakingOfficial'  // 本地测试服器地址
    }
  },
  pro: {
    MODE: 'production',
    ENV_API:{
      host: 'http://zuul.manjiwang.com/realestatecustomer',  // 正式服器地址
    }
  },
  test: {
    MODE: 'development',
    ENV_API:{
      host: 'http://192.168.0.30:8769/realestatecustomer', // 测试环境
    }
  }
}
