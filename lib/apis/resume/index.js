import { doGet, doPost } from '../base'
import { APIS } from '../../constants/resume'

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
 * 创建简历
 * @param {*} args
 */
export function requestResumeCreate (args) {
  return doGet(args, 'requestResumeCreate', APIS)
}

/**
 * 删除简历
 * @param {*} args
 */
export function requestResumeDelete (args) {
  return doPost(args, 'requestResumeDelete', APIS)
}

/**
 * 操作简历-刷新、设置或取消默认简历、设置或取消公开简历
 * @param {*} args
 */
export function requestResumeOperate (args) {
  return doPost(args, 'requestResumeOperate', APIS)
}

/**
 * 获取简历列表PC
 * @param {*} args
 */
export function requestResumeListPC (args) {
  return doGet(args, 'requestResumeListPC', APIS)
}

/**
 * 获取简历置顶服务
 * @param {*} args
 */
export function requestResumeTopService (args) {
  return doGet(args, 'requestResumeTopService', APIS)
}

/**
 * 修改简历名称
 * @param {*} args
 */
export function requestResumeModifyName (args) {
  return doGet(args, 'requestResumeModifyName', APIS)
}

/**
 * 获取完善到简历的第几步
 * @param {*} args
 */
export function requestResumeStatus (args) {
  return doGet(args, 'requestResumeStatus', APIS)
}

/**
 * 简历头像图片鉴定PC
 * @param {*} args
 */
export function requestResumeGreenScanPC (args) {
  return doGet(args, 'requestResumeGreenScanPC', APIS)
}
