import * as Company from '../../apis/company'

/**
 * 获取公司详情
 * @param {*} args 
 *  {
 *    companyNumber: String
 *  }
 * @return Promise
 */
export function requestCompanyDetail (args) {
  if (!args || !args.companyNumber) {
    return Promise.reject(new Error('公司编号不能为空'))
  } else {
    return Company.requestCompanyDetail(args)
  }
}

/**
 * 获取公司问答
 * @param {*} args 
 *  {
 *    companyNumber: String
 *  }
 * @return Promise
 */
export function requestCompanyQuestion (args) {
  if (!args || !args.companyNumber) {
    return Promise.reject(new Error('公司编号不能为空'))
  } else {
    return Company.requestCompanyQuestion(args)
  }
}

/**
 * 获取公司面试邀请
 * @param {*} args 
 *  {
 *    rootCompanyId: String,
 *    companyId: String
 *  }
 * @return Promise
 */
export function requestCompanyInterview (args) {
  if (!args) {
    let errMessage = ''
    if (!args.rootCompanyId) {
      errMessage = 'rootCompanyId不能为空'
    } else if (!args.companyId) {
      errMessage = '公司ID不能为空'
    }
    return Promise.reject(new Error(errMessage))
  } else {
    return Company.requestCompanyInterview(args)
  }
}

/**
 * 获取公司点评信息
 * @param {*} args 
 *  {
 *    companyNumber: String
 *  }
 * @return Promise
 */
export function requestCompanyComment (args) {
  if (!args || !args.companyNumber) {
    return Promise.reject(new Error('公司编号不能为空'))
  } else {
    return Company.requestCompanyComment(args)
  }
}
