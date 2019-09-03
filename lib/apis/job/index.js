
import { APIS } from '../../constants/job'
import { doGet, doPost } from '../base'

/**
 * 获取推荐职位
 * @param {*} args 
 */
export function requestRecommendJobs (args) {
  return doGet(args, 'requestRecommendJobs', APIS)
}

/**
 * 搜索职位 V2
 * @param {*} args 
 */
export function requestJobSearch (args) {
  return doGet(args, 'requestJobSearch', APIS)
}

/**
 * 获取职位详情
 * @param {*} args 
 */
export function requestJobDetail (args) {
  return doGet(args, 'requestJobDetail', APIS)
}

/**
 * 获取相似职位
 * @param {*} args 
 */
export function requestSimilarJobs (args) {
  return doGet(args, 'requestSimilarJobs', APIS)
}

/**
 * 获取职位的小程序二维码
 * @param {*} args 
 */
export function requestJobMpQrcode (args) {
  return doGet(args, 'requestJobMpQrcode', APIS)
}

/**
 * 获取在招职位
 * @param {*} args 
 */
export function requestAreaJobs (args) {
  return doGet(args, 'requestAreaJobs', APIS)
}

/**
 * 获取公司在招职位
 * @param {*} args 
 */
export function requestCompanyRecruitment (args) {
  return doGet(args, 'requestCompanyRecruitment', APIS)
}

/**
 * 获取在招职位所在城市
 * @param {*} args 
 */
export function requestAreaJobCity (args) {
  return doGet(args, 'requestAreaJobCity', APIS)
}

/**
 * 收藏职位
 * @param {*} args 
 */
export function requestJobCollection (args) {
  return doGet(args, 'requestJobCollection', APIS)
}

/**
 * 投递职位
 * @param {*} args 
 */
export function requestJobDeliver (args) {
  return doPost(args, 'requestJobDeliver', APIS)
}

/**
 * 获取职位投递状态
 * @param {*} args 
 */
export function requestJobDeliverStatus (args) {
  return doGet(args, 'requestJobDeliverStatus', APIS)
}
