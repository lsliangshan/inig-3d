import * as Company from '../../apis/company'

/**
 * 获取公司详情
 * @param {*} args 
 *  {
 *    companyNumber: 'CZ875608890'
 *  }
 * @return Promise
 */
export function requestCompanyDetail (args) {
  if (!args || !args.number) {
    return Promise.reject(new Error('公司编号不能为空'))
  } else {
    return Company.requestCompanyDetail(args)
  }
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
  if (!args || !args.companyName) {
    return Promise.reject(new Error('公司名称不能为空'))
  } else {
    return Company.requestCompanyQuestion(args)
  }
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
  if (!args) {
    let errMessage = ''
    if (!args.rootCompanyId) {
      errMessage = 'rootCompanyId不能为空'
    } else if (!args.companyId) {
      errMessage = '公司ID不能为空'
    }
    return Promise.reject(new Error(errMessage))
  } else {
    return Company.requestCompanyInterviewCount(args)
  }
}

/**
 * 获取公司点评信息
 * @param {*} args 
 *  {
 *    orgNumber: 'CZ875608890'
 *  }
 * @return Promise
 */
export function requestCompanyComment (args) {
  if (!args || !args.orgNumber) {
    return Promise.reject(new Error('公司编号不能为空'))
  } else {
    return Company.requestCompanyComment(args)
  }
}
