import * as Job from '../../apis/job'
import { setJobInfo } from './entity'
import { paramsTranslator } from '../../utils'

/**
 * 获取推荐职位
 * Capi文档：https://wiki.zhaopin.com/pages/viewpage.action?pageId=15106457
 * @param {*} args 
 *  {
 *    resumeVersion: "1",
 *    resumeNumber: "",
 *    isCompus: "",
 *    eventScenario: ""
 *  }
 * @return Promise
 */
const recommendJobsArgsMap = {
  isCampus: 'isCompus'
}
export function requestRecommendJobs (args) {
  return new Promise(async (resolve, reject) => {
    let formatArgs = paramsTranslator(args, recommendJobsArgsMap)
    if (!args || !args.resumeNumber) {
      reject(new Error('简历编号不能为空'))
    } else {
      await Job.requestRecommendJobs(Object.assign({
        resumeVersion: '1',
        isCompus: '0',
        eventScenario: 'weexAppHome'
      }, formatArgs)).then(res => {
        // if (res.statusCode === 200) {
        //   setJobInfo(args.number, res.data)
        // }
        resolve(res)
      }).catch(err => {
        reject(new Error(err.message || '获取失败，请稍后再试'))
      })
    }
  })
}

/**
 * 搜索职位
 * Capi文档：https://wiki.zhaopin.com/pages/viewpage.action?pageId=17081654
 * @param {*} args 
 *  {
 *    order: 0,
 *    kw: "", // S_SOU_FULL_INDEX 全文关键词
 *    jobType: "", // S_SOU_POSITION_TYPE 职位类型 SF_2_100_2
 *    industry: "", // S_SOU_INDUSTRY 行业id
 *    workCity: "", // S_SOU_WORK_CITY 工作城市 SF_2_100_12
 *    experience: "", // S_SOU_WORK_EXPERIENCE 工作经验要求id
 *    education: "", // S_SOU_EDUCATION_LOWESTLEVEL 学历要求id
 *    companyType: "", // S_SOU_COMPANY_TYPE 公司性质id
 *    companyScale: "", // S_SOU_COMPANY_SCALE 公司规模id
 *    salary: "", // S_SOU_SALARY 月薪id SF_2_100_11
 *    welfareTag: "", // S_SOU_WELFARETAB 福利标签 SF_2_100_34
 *    coordinate: "", // S_SOU_COORDINATE 经纬度，如 41.80240000;123.37850000;3
 *    publishDate: "", // S_SOU_PUBLISH_DATE 职位发布时间 SF_2_100_17
 *    jobName: "", // S_SOU_POSITION_NAME_QUERY 职位名称 SF_2_100_18
 *    jobId: "", // S_SOU_POSITION_ID 职位编号 SF_2_100_27
 *    companyName: "", // S_SOU_COMPANY_NAME 公司名称关键词 SF_2_100_19
 *    comapnyId: "", // S_SOU_COMPANY_ID 公司编号 SF_2_100_20
 *    isCompus: 0, // isCompus 是否学生，0：非学生；1：学生
 *    eventScenario: "", // eventScenario 事件场景
 *    pageIndex: 1, // pageIndex 页码
 *    pageSize: 20, // pageSize 条数
 *    resumeNumber: "", // cvNumber 简历编号
 *  }
 * @return Promise
 */
const jobSearchArgsMap = {
  kw: 'S_SOU_FULL_INDEX',
  sort: 'order',
  salary: 'S_SOU_SALARY',
  coordinate: 'S_SOU_COORDINATE',
  jobType: 'S_SOU_POSITION_TYPE',
  industry: 'S_SOU_INDUSTRY',
  welfareTag: 'S_SOU_WELFARETAB',
  publishDate: 'S_SOU_PUBLISH_DATE',
  companyName: 'S_SOU_COMPANY_NAME',
  jobName: 'S_SOU_POSITION_NAME_QUERY',
  workCity: 'S_SOU_WORK_CITY',
  experience: 'S_SOU_WORK_EXPERIENCE',
  education: 'S_SOU_EDUCATION_LOWESTLEVEL',
  companyType: 'S_SOU_COMPANY_TYPE',
  companyScale: 'S_SOU_COMPANY_SCALE',
  jobId: 'S_SOU_POSITION_ID',
  comapnyId: 'S_SOU_COMPANY_ID',
  resumeNumber: 'cvNumber'
}
export function requestJobSearch (args) {
  return new Promise(async (resolve, reject) => {
    let formatArgs = paramsTranslator(args, jobSearchArgsMap)
    await Job.requestJobSearch(formatArgs).then(res => {
      resolve(res)
    }).catch(err => {
      reject(new Error(err.message || '搜索失败，请稍后再试'))
    })
  })
}

/**
 * 获取职位详情
 * Capi文档：https://wiki.zhaopin.com/pages/viewpage.action?pageId=20513584
 * @param {*} args 
 *  {
 *    number: "CC407312210J00139254515",
 *    feedback: false
 *  }
 * @return Promise
 */
export function requestJobDetail (args) {
  return new Promise(async (resolve, reject) => {
    if (!args || !args.number) {
      reject(new Error('职位编号不能为空'))
    } else {
      await Job.requestJobDetail(args).then(res => {
        if (res.statusCode === 200) {
          setJobInfo(args.number, res.data).catch(err => resolve(res))
        }
        resolve(res)
      }).catch(err => {
        reject(new Error(err.message || '获取失败，请稍后再试'))
      })
    }
  })
}

/**
 * 获取相似职位
 * Capi文档：https://wiki.zhaopin.com/pages/viewpage.action?pageId=15126114
 * @param {*} args
 *  {
 *    number:     "CC407312210J00139254515",
 *    cityId:     "571"
 *    pageIndex:  1
 *  }
 * @return Promise
 */
const similarJobsArgsMap = {
  cityId: 'locationCity',
  pageIndex: 'pageCode'
}
export function requestSimilarJobs (args) {
  return new Promise(async (resolve, reject) => {
    let formatArgs = paramsTranslator(args, similarJobsArgsMap)
    if (!args || !args.number) {
      reject(new Error('职位编号不能为空'))
    } else {
      await Job.requestSimilarJobs(formatArgs).then(res => {
        resolve(res)
      }).catch(err => {
        reject(new Error(err.message || '相似职位获取失败，请稍后再试'))
      })
    }
  })
}

/**
 * 获取职位的小程序二维码
 * @param {*} args 
 *  {
 *    number:   "CC407312210J00139254515",
 *    width:    120,
 *    hyaline:  false
 *  }
 * @return Promise
 */
export function requestJobMpQrcode (args) {
  if (!args || !args.number) {
    return Promise.reject(new Error('职位编号不能为空'))
  } else {
    return Job.requestJobMpQrcode(args)
  }
}

/**
 * 获取在招职位
 * @param {*} args 
 *  {
 *    companyNumber:  "CZ407312210",
 *    cityId:     ""
 *  }
 * @return Promise
 */
const areaJobsArgsMap = {
  companyNumber: 'S_SOU_COMPANY_ID',
  cityId: 'S_SOU_WORK_CITY'
}
export function requestAreaJobs (args) {
  return new Promise(async (resolve, reject) => {
    let formatArgs = paramsTranslator(args, areaJobsArgsMap)
    if (!args || !args.companyNumber) {
      reject(new Error('公司ID不能为空'))
    } else {
      await Job.requestAreaJobs(Object.assign({
        S_SOU_POSITION_TYPE: '1;2;4',
        facets: 'SOU_WORK_CITY',
        pageIndex: 1,
        pageSize: 10
      }, formatArgs)).then(res => {
        resolve(res)
      }).catch(err => {
        reject(new Error(err.message || '搜索失败，请稍后再试'))
      })
    }
  })
}

/**
 * 获取公司在招职位
 * @param {*} args 
 *  {
 *    companyNumber:  "CZ407312210",
 *    cityId:     ""
 *  }
 * @return Promise
 */
const companyRecruitmentArgsMap = {
  companyNumber: 'S_SOU_COMPANY_ID'
}
export function requestCompanyRecruitment (args) {
  return new Promise(async (resolve, reject) => {
    let formatArgs = paramsTranslator(args, companyRecruitmentArgsMap)
    if (!args || !args.companyNumber) {
      reject(new Error('公司ID不能为空'))
    } else {
      await Job.requestCompanyRecruitment(Object.assign({
        version: '0.0.0'
      }, formatArgs)).then(res => {
        resolve(res)
      }).catch(err => {
        reject(new Error(err.message || '搜索失败，请稍后再试'))
      })
    }
  })
}

/**
 * 获取在招职位所在城市
 * @param {*} args 
 *  {
 *    number: "CC407312210J00139254515" // CZ407312210
 *  }
 * @important 这是个神奇的接口，number可以传职位编号，也可以传公司编号
 * @return Promise
 */
const areaJobCityArgsMap = {
  number: 'companyNumber'
}
export function requestAreaJobCity (args) {
  return new Promise(async (resolve, reject) => {
    let formatArgs = paramsTranslator(args, areaJobCityArgsMap)
    if (!args || !args.number) {
      reject(new Error('职位编号不能为空'))
    } else {
      await Job.requestAreaJobCity(formatArgs).then(res => {
        resolve(res)
      }).catch(err => {
        reject(new Error(err.message))
      })
    }
  })
}

/**
 * 收藏、取消收藏职位
 * Capi文档：https://wiki.zhaopin.com/pages/viewpage.action?pageId=4164113
 * @param {*} args 
 *  {
 *    number:  "CC407312210J00139254515",
 *    cityId:          "530"
 *  }
 * @return Promise
 */
const jobCollectionArgsMap = {
  number: 'positionNumbers',
  cityId: 'cityIds'
}
export function requestJobCollection (args) {
  return new Promise(async (resolve, reject) => {
    let formatArgs = paramsTranslator(args, jobCollectionArgsMap)
    if (!args || !args.number) {
      reject(new Error('职位编号不能为空'))
    } else {
      await Job.requestJobCollection(Object.assign({
        operateType: 3
      }, formatArgs)).then(res => {
        resolve(res)
      }).catch(err => {
        reject(new Error(err.message || '操作失败，请稍后再试'))
      })
    }
  })
}

/**
 * 投递职位
 * Capi文档：https://wiki.zhaopin.com/pages/viewpage.action?pageId=6447899
 * @param {*} args 
 *  {
 *    cityId: "565", // 多个值用;号区分
 *    inviteCode: "",
 *    number: "CC704283421J00389744407", // 多个值用;号区分
 *    resumeNumber: "JM987689921R90500857000",
 *    deliveryWay: 0, // 0: 单投；1：批投
 *    stAction: 701, // 默认：601 来源的用户行为（搜索601、推荐701、闪聘101）
 *    stPage: 50
 *  }
 * @return Promise
 */
const jobDeliverArgsMap = {
  number: 'positionNumbers',
  cityId: 'cityIds',
  stAction: 'st_action',
  stPage: 'st_page'
}
export function requestJobDeliver (args) {
  return new Promise(async (resolve, reject) => {
    let formatArgs = paramsTranslator(args, jobDeliverArgsMap)
    if (!args) {
      reject(new Error('职位编号不能为空'))
    } else {
      if (!args.number || (args.number.length < 1)) {
        reject(new Error('职位编号不能为空'))
      } else if (!args.resumeNumber) {
        reject(new Error('简历编号不能为空'))
      } else {
        let pagecode = global.INIG_OPTIONS ? global.INIG_OPTIONS.pagecode : ''
        await Job.requestJobDeliver(Object.assign({
          language: 1,
          resumeVersion: 1,
          askPageCode: pagecode,
          st_page: pagecode,
          exposureType: 0
        }, formatArgs)).then(res => {
          resolve(res)
        }).catch(err => {
          reject(new Error(err.message || '投递失败，请稍后再试'))
        })
      }
    }
  })
}

/**
 * 获取职位投递状态
 * @param {*} args 
 *  {
 *    number: "CC407312210J00139254515"
 *  }
 * @return Promise
 */
export function requestJobDeliverStatus (args) {
  return new Promise(async (resolve, reject) => {
    if (!args || !args.number) {
      reject(new Error('职位编号不能为空'))
    } else {
      await Job.requestJobDeliverStatus(args).then(res => {
        resolve(res)
      }).catch(err => {
        reject(new Error(err.message || '获取失败，请稍后再试'))
      })
    }
  })
}
