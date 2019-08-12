import * as Job from '../../apis/job'
import { setJobInfo } from './entity'

/**
 * 获取推荐职位
 * @param {*} args 
 *  {
 *    resumeVersion: "1",
 *    resumeNumber: "",
 *    isCompus: "",
 *    eventScenario: ""
 *  }
 * @return Promise
 */
export function requestRecommendJobs (args) {
  return new Promise(async (resolve, reject) => {
    await Job.requestRecommendJobs(args).then(res => {
      // if (res.statusCode === 200) {
      //   setJobInfo(args.number, res.data)
      // }
      resolve(res)
    }).catch(err => {
      reject(new Error(err.message || '获取失败，请稍后再试'))
    })
  })
}

/**
 * 搜索职位
 * @param {*} args 
 *  {
 *    order: 0,
 *    kw: "", // S_SOU_FULL_INDEX 全文关键词
 *    jobType: "", // S_SOU_JOB_TYPE 职位类型 SF_2_100_2
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
export function requestJobSearch (args) {
  return new Promise(async (resolve, reject) => {
    await Job.requestJobSearch(args).then(res => {
      // if (res.statusCode === 200) {
      //   setJobInfo(args.number, res.data)
      // }
      resolve(res)
    }).catch(err => {
      reject(new Error(err.message || '搜索失败，请稍后再试'))
    })
  })
}

/**
 * 获取职位详情
 * @param {*} args 
 *  {
 *    number: "CC407312210J00139254515"
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
          setJobInfo(args.number, res.data)
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
 * @param {*} args 
 *  {
 *    number:     "CC407312210J00139254515",
 *    subJobType: 6,
 *    cityId:     "571"
 *  }
 * @return Promise
 */
export function requestSimilarJobs (args) {
  if (!args || !args.number) {
    return Promise.reject(new Error('职位编号不能为空'))
  } else {
    return Job.requestSimilarJobs(args)
  }
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
 *    companyId:  "CZ407312210",
 *    cityId:     ""
 *  }
 * @return Promise
 */
export function requestAreaJobs (args) {
  if (!args || !args.companyId) {
    return Promise.reject(new Error('公司ID不能为空'))
  } else {
    return Job.requestAreaJobs({
      S_SOU_POSITION_TYPE: '1;2;4',
      facets: 'SOU_WORK_CITY',
      S_SOU_COMPANY_ID: args.companyId,
      S_SOU_WORK_CITY: args.workCity || '',
      pageIndex: args.pageIndex || 1,
      pageSize: args.pageSize || 10
    })
  }
}

/**
 * 获取在招职位所在城市
 * @param {*} args 
 *  {
 *    number: "CC407312210J00139254515"
 *  }
 * @return Promise
 */
export function requestAreaJobCity (args) {
  if (!args || !args.companyNumber) {
    return Promise.reject(new Error('职位编号不能为空'))
  } else {
    return Job.requestAreaJobCity(args)
  }
}

/**
 * 收藏职位
 * @param {*} args 
 *  {
 *    positionNumbers:  "CC407312210J00139254515",
 *    cityIds:          "530"
 *  }
 * @return Promise
 */
export function requestJobCollection (args) {
  if (!args || !args.positionNumbers) {
    return Promise.reject(new Error('职位编号不能为空'))
  } else {
    return Job.requestJobCollection(Object.assign({
      operateType: 3
    }, args))
  }
}

/**
 * 投递职位
 * @param {*} args 
 *  {
 *    cityIds: "565", // 多个值用;号区分
 *    inviteCode: "",
 *    positionNumbers: "CC704283421J00389744407", // 多个值用;号区分
 *    resumeNumber: "JM987689921R90500857000",
 *    deliveryWay: 0, // 0: 单投；1：批投
 *    st_action: 701, // 默认：601 来源的用户行为（搜索601、推荐701、闪聘101）
 *    channel: "pc"
 *  }
 * @return Promise
 */
export function requestJobDeliver (args) {
  if (!args || !args.positionNumbers || (args.positionNumbers.length < 1)) {
    return Promise.reject(new Error('职位编号不能为空'))
  } else {
    let pagecode = global.INIG_OPTIONS ? global.INIG_OPTIONS.pagecode : ''
    return Job.requestJobDeliver(Object.assign({
      language: 1,
      resumeVersion: 1,
      askPageCode: pagecode,
      st_page: pagecode,
      exposureType: 0
    }, args))
  }
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
  if (!args || !args.number) {
    return Promise.reject(new Error('职位编号不能为空'))
  } else {
    return Job.requestJobDeliverStatus(args)
  }
}
