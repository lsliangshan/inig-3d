export const APIS = {
  baseUrl: 'http://capi.zhaopin.com',
  requestJobDetail: '/capi/position/getPositionDetail', // 获取职位详情
  requestSimilarJobs: '/capi/position/searchRecommendPosition', // 获取相似职位
  requestAreaJobs: '/capi/position/searchPositionsCompany', // 获取在招职位
  requestAreaJobCity: '/capi/company/getCompanySearchQuery', // 获取在招职位所在城市
  requestJobCollection: '/capi/position/operate', // 收藏职位
  requestJobDeliver: '/capi/position/applyV2', // 投递职位
  requestJobMpQrcode: '/c/i/jobs/qrcode', // 获取职位的小程序二维码
  requestBestEmployer: '/c/i/best-employer/label', // 获取最佳雇主
  requestBestEmployerComment: '/c/i/best-employer/company-reviews', // 获取最佳雇主评论
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