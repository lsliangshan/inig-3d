import { doGet } from '../base'
import { APIS } from '../../constants/company'
import { companyInfoTranslator } from './translator'

/**
 * 获取公司详情
 * @param {*} args 
 */
export function requestCompanyDetail (args) {
  // return doGet(args, 'requestCompanyDetail', APIS)
  return new Promise((resolve, reject) => {
    doGet(args, 'requestCompanyDetail', APIS).then(data => {
      let _data = JSON.parse(JSON.stringify(data))
      if (data.statusCode === 200) {
        _data.data = companyInfoTranslator(_data.data)
      }
      resolve(_data)
    }).catch(err => {
      reject(new Error(err.message))
    })
  })
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