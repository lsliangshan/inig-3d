export const APIS = {
  baseUrl: 'https://capi.zhaopin.com',
  requestResumeGetNode: '/capi/resume/getResumeNode', // 获取简历节点信息
  requestResumeSetNode: '/capi/resume/saveResumeNode', // 添加或更新简历节点信息
  requestResumeDeleteNode: '/capi/resume/deleteResumeNode', // 删除简历节点信息
  requestResumePreview: '/capi/resume/preview', // 预览简历
  requestResumeDelete: '/capi/resume/delete', // 删除简历
  requestResumeOperate: '/capi/resume/operate', // 操作简历-刷新、设置或取消默认简历、设置或取消公开简历
  requestResumeTopService: '/capi/userpay/getServiceStatus', // 获取简历置顶服务
  requestResumeModifyName: '/capi/resume/modifyName', // 修改简历名称
  requestResumeStatus: '/capi/resume/GetCurrentStatuus', // 获取完善到简历的第几步
  requestResumeListPC: '/capi/resume/getResumeNode', // 获取简历列表PC
  requestResumeGreenScanPC: '/capi/resume/getGreenScan', // 简历头像图片鉴定PC
  // 以下接口暂未处理
  requestResumeUploadImage: '/capi/more/updateImage', // 简历上传头像
  requestResumeSetNodePC: '/capi/resume/saveResumeNodePC', // 添加或更新简历节点信息PC
  requestResumeCreatePC: '/capi/resume/createBlankResumePC', // 创建简历PC
  requestResumeIntegrityPC: '/capi/resume/getResumeNodePC', // 获取简历完整度PC
}


export const LOCAL_KEYS = {
  resumeInfo: 'local-resume-info'
}
