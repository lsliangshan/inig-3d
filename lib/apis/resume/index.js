import { doGet, doPost } from '../base'
import { APIS } from '../../constants/resume'

/* const APISS = {
  baseUrl: 'https://capi.zhaopin.com',
  requestResumeGetNode: '/capi/resume/getResumeNode', // 获取简历节点信息
  requestResumeSetNode: '/capi/resume/saveResumeNode', // 添加或更新简历节点信息
  requestResumeDeleteNode: '/capi/resume/deleteResumeNode', // 删除简历节点信息
  requestResumePreview: '/capi/resume/preview', // 预览简历
  requestResumeDelete: '/capi/resume/delete', // 删除简历
  requestResumeOperate: '/capi/resume/operate', // 刷新简历、设置或取消默认简历、加密或公开简历、取消委托投递简历操作
  requestResumeList: '/capi/resume/getResumeNode', // 获取简历列表
  requestResumeTopService: '/capi/userpay/getServiceStatus', // 获取简历置顶服务
  requestResumeModifyName: '/capi/resume/modifyName', // 修改简历名称
  requestResumeGreenScan: '/capi/resume/getGreenScan', // 简历头像图片鉴定
  requestResumeUploadImage: '/capi/more/updateImage', // 简历上传头像
  requestResumeSetNodePC: '/capi/resume/saveResumeNodePC', // 添加或更新简历节点信息PC
  requestResumeCreatePC: '/capi/resume/createBlankResumePC', // 创建简历PC
  requestResumeIntegrityPC: '/capi/resume/getResumeNodePC', // 获取简历完整度PC
  requestResumeStatus: '/capi/resume/GetCurrentStatuus', // 获取完善到简历的第几步
} */

/**
 * 获取简历节点信息
 * @param {*} args 
 */
export function requestResumeGetNode (args) {
  return doGet(args, 'requestResumeGetNode', APIS)
}

/**
 * 添加或更新简历节点信息
 * @param {*} args
 */
export function requestResumeSetNode (args) {
  return doPost(args, 'requestResumeSetNode', APIS)
}

/**
 * 删除简历节点信息
 * @param {*} args
 */
export function requestResumeDeleteNode (args) {
  return doGet(args, 'requestResumeDeleteNode', APIS)
}

/**
 * 预览简历
 * @param {*} args
 */
export function requestResumePreview (args) {
  return doGet(args, 'requestResumePreview', APIS)
}

/**
 * 删除简历
 * @param {*} args
 */
export function requestResumeDelete (args) {
  return doPost(args, 'requestResumeDelete', APIS)
}
