export const APIS = {
  baseUrl: 'http://fe-api.zhaopin.com/',
  requestJobDetail: '/c/i/jobs/position-detail', // 获取职位详情
  requestSimilarJobs: '/c/i/similar-positions', // 获取相似职位
  requestJobMpQrcode: '/c/i/jobs/qrcode', // 获取职位的小程序二维码
  requestAreaJobs: '/c/i/company/area-position', // 获取在招职位
  requestAreaJobCity: '/c/i/company/position', // 获取在招职位所在城市
  requestBestEmployer: '/c/i/best-employer/label', // 获取最佳雇主
  requestBestEmployerComment: '/c/i/best-employer/company-reviews', // 获取最佳雇主评论
  requestJobCollection: '/c/i/collection', // 收藏职位
  requestJobDeliver: '/c/pc/alan/jobs/application', // 投递职位
  requestJobDeliverStatus: '/c/i/jobs/application-status', // 获取职位投递状态
}

export const SCENE = {
  weexHome: 'weexAppHome', // App Weex首页
  nativeIosHome: 'nativeiOSHome', // App原生搜索结果页
  nativeAndroidHome: 'nativeAndroidHome', // Ios原生首页
  searchResult: 'searchListRecommend' // Android原生首页
}

export const LOCAL_KEYS = {
  jobInfo: 'local-job-info'
}