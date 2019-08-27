import * as Company from '../../apis/company'
import { setCompanyInfo } from './entity'
import { paramsTranslator } from '../../utils'

/**
 * 获取公司详情
 * @param {*} args 
 *  {
 *    companyNumber: 'CZ875608890'
 *  }
 * @return Promise
 */
export function requestCompanyDetail (args) {
  return new Promise(async (resolve, reject) => {
    if (!args || !args.number) {
      return reject(new Error('公司编号不能为空'))
    } else {
      await Company.requestCompanyDetail(args).then((res) => {
        if (res.statusCode === 200) {
          setCompanyInfo(args.number, res.data)
        }
        resolve(res)
      }).catch(err => {
        reject(new Error(err.message || '获取失败，请稍后再试'))
      })
    }
  })
}

/**
 * 获取公司问答
 * @param {*} args 
 *  {
 *    companyName: '广州热招测试有限公司'
 *  }
 * @return Promise
 */
export function requestCompanyQuestion (args) {
  return new Promise(async (resolve, reject) => {
    if (!args || !args.companyName) {
      return reject(new Error('公司名称不能为空'))
    } else {
      await Company.requestCompanyQuestion(args).then((res) => {
        resolve(res)
      }).catch(err => {
        reject(new Error(err.message || '获取失败，请稍后再试'))
      })
    }
  })
}

/**
 * 获取公司面试邀请数量
 * @param {*} args 
 *  {
 *    rootCompanyId: '87560889',
 *    companyId: '87560889'
 *  }
 * @return Promise
 */
export function requestCompanyInterviewCount (args) {
  return new Promise(async (resolve, reject) => {
    if (!args) {
      let errMessage = ''
      if (!args.rootCompanyId) {
        errMessage = 'rootCompanyId不能为空'
      } else if (!args.companyId) {
        errMessage = '公司ID不能为空'
      }
      return reject(new Error(errMessage))
    } else {
      await Company.requestCompanyInterviewCount(args).then((res) => {
        resolve(res)
      }).catch(err => {
        reject(new Error(err.message || '获取失败，请稍后再试'))
      })
    }
  })
}

/**
 * 获取公司点评信息
 * @param {*} args 
 *  {
 *    orgNumber: 'CZ875608890'
 *  }
 * @return Promise
 */
const companyCommentArgsMap = {
  companyNumber: 'orgNumber'
}
export function requestCompanyComment (args) {
  return new Promise(async (resolve, reject) => {
    if (!args || !args.companyNumber) {
      return reject(new Error('公司编号不能为空'))
    } else {
      let formatArgs = paramsTranslator(args, companyCommentArgsMap)
      await Company.requestCompanyComment(formatArgs).then((res) => {
        resolve(res)
      }).catch(err => {
        reject(new Error(err.message || '获取失败，请稍后再试'))
      })
    }
  })
}
