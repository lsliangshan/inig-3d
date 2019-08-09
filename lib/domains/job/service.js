import * as Job from '../../apis/job'

/**
 * 获取职位详情
 * @param {*} args 
 *  {
 *    number: "CC407312210J00139254515"
 *  }
 * @return Promise
 */
export function requestJobDetail (args) {
  if (!args || !args.number) {
    return Promise.reject(new Error('职位编号不能为空'))
  } else {
    return Job.requestJobDetail(args)
  }
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
    return Job.requestAreaJobs(args)
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
  if (!args || !args.number) {
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
    return Job.requestJobCollection(Object.assign({}, args, {
      operateType: 3
    }))
  }
}

/**
 * 投递职位
 * @param {*} args 
 *  {
 *    batched: false,
 *    cityIds: ["565"],
 *    inviteCode: "",
 *    jobNumbers: ["CC704283421J00389744407"],
 *    jobSource: "RECOMMENDATION",
 *    language: 1,
 *    pageCode: 4020,
 *    resumeNumber: "JM987689921R90500857000"
 *  }
 * @return Promise
 */
export function requestJobDeliver (args) {
  if (!args || !args.jobNumbers || (args.jobNumbers.length < 1)) {
    return Promise.reject(new Error('职位编号不能为空'))
  } else {
    return Job.requestJobDeliver(args)
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
