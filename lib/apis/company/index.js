import { doGet } from '../base'
import { APIS } from '../../constants/company'

/**
 * 获取公司详情
 * @param {*} args 
 */
export function requestCompanyDetail (args) {
  return doGet(args, 'requestCompanyDetail', APIS)
}

/**
 * 获取公司问答
 * @param {*} args
 */
export function requestCompanyQuestion (args) {
  return doGet(args, 'requestCompanyQuestion', APIS)
}

/**
 * 获取公司面试邀请数量
 * @param {*} args
 */
export function requestCompanyInterviewCount (args) {
  return doGet(args, 'requestCompanyInterviewCount', APIS)
}

/**
 * 获取公司点评信息
 * @param {*} args
 */
export function requestCompanyComment (args) {
  return doGet(args, 'requestCompanyComment', APIS)
}