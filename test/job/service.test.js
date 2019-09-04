import { INIG } from '../../index'
const Job = require('../../lib/domains/job/service')
const chai = require('chai')
const expect = chai.expect
const assert = chai.assert

const DEFAULT_CONFIG = {
  jobNumber: 'CC875608890J00261530502',
  companyNumber: 'CZ875608890',
  companyName: '广州热招测试有限公司',
  rootCompanyId: '87560889',
  companyId: '87560889',
  resumeNumber: 'JM809213719R90250000000',
  platform: '13',
  userId: '705788774',
  at: '22574ad9088f4441bdee6ddaf215a1f7',
  rt: '52c16fd691ae4d98ad405526a733dc71'
}
INIG({
  options: {
    platform: 13, // 必填
    pagecode: 4020, // 必填
    appid: 'A23'
  },
  isServer: false,
  isTest: true
})
const baseData = {
  // platform: 13,   // 必填
  // pagecode: 4020, // 必填
  // appid: 'A23'
}

/**
 * 推荐职位
 */
const recommendJobKeys = ["applyType", "bestEmployerLabel", "bestEmployerType", "businessIconPath", "chatWindow", "cityDistrict", "cityId", "commercializationType", "companyAutoID", "companyLogo", "companyName", "companyNumber", "companySize", "companyUrl", "deliveryPath", "distance", "distanceSubways", "education", "emplType", "expandCount", "fastPosition", "featureLabel", "feedbackRation", "futureJob", "futureJobUrl", "hasAppliedPosition", "industry", "industryName", "jobDesc", "jobId", "jobType", "menVipLevel", "menVipUrl", "name", "needMajor", "number", "positionSourceType", "positionURL", "property", "publishTime", "publishTimeDt", "qualifications", "refreshLevelType", "roles", "rootOrgId", "salary", "salary60", "salaryReal", "score", "scoreState", "skillLabel", "staff", "staffId", "tags", "tradingArea", "welfareLabel", "workCity", "workingExp", "workingExpCode"]
describe('【职位领域】推荐职位 - requestRecommendJobs', function () {
  it('1. 空参数', () => {
    return Job.requestRecommendJobs().then(() => {
      assert(false)
    }).catch(err => {
      expect(err.message).to.be.equal('简历编号不能为空')
    })
  })
  it('2. at、rt必需且正确', () => {
    return Job.requestRecommendJobs(Object.assign({}, baseData, {
      resumeNumber: DEFAULT_CONFIG.resumeNumber,
      at: 'DEFAULT_CONFIG.at',
      rt: 'DEFAULT_CONFIG.rt'
    })).then(res => {
      expect(res.statusDescription).to.contain('用户凭证失效') // .and.expect(res.statusCode).to.be.equal(206)
    }).catch(err => {
      assert(false)
    })
  })
  it('3. 正常参数', () => {
    return Job.requestRecommendJobs(Object.assign({}, baseData, {
      resumeNumber: DEFAULT_CONFIG.resumeNumber,
      at: DEFAULT_CONFIG.at,
      rt: DEFAULT_CONFIG.rt
    })).then(res => {
      expect(res.data.list[0]).to.have.all.keys(recommendJobKeys)
    }).catch(err => {
      assert(false)
    })
  })
})

/**
 * 搜索职位
 */


/**
 * 获取职位详情
 * 不需要at/rt
 */
const jobDetailKeys = ["companyDetail", "positionDetail", "positionFeedback", "positionGrayDetail"]
describe('【职位领域】获取职位详情 - requestJobDetail', function () {
  it('1. 空参数', () => {
    return Job.requestJobDetail().then(() => {
      assert(false)
    }).catch(err => {
      expect(err.message).to.be.equal('职位编号不能为空')
    })
  })
  it('2. 正常参数', () => {
    return Job.requestJobDetail(Object.assign({}, baseData, {
      number: DEFAULT_CONFIG.jobNumber,
      at: DEFAULT_CONFIG.at,
      rt: DEFAULT_CONFIG.rt
    })).then(res => {
      expect(res.data).to.have.all.keys(jobDetailKeys)
    }).catch(err => {
      assert(false)
    })
  })
})

/**
 * 获取相似职位
 * 不需要at/rt
 */
const similarJobsKeys = ["chatTotal", "chatWindowState", "count", "informationStream", "jobLabel", "list", "method", "typeSearch"]
describe('【职位领域】获取相似职位 - requestSimilarJobs', function () {
  it('1. 空参数', () => {
    return Job.requestSimilarJobs().then(() => {
      assert(false)
    }).catch(err => {
      expect(err.message).to.be.equal('职位编号不能为空')
    })
  })
  it('2. 正常参数', () => {
    return Job.requestSimilarJobs(Object.assign({}, baseData, {
      number: DEFAULT_CONFIG.jobNumber,
      at: DEFAULT_CONFIG.at,
      rt: DEFAULT_CONFIG.rt
    })).then(res => {
      expect(res.data).to.have.all.keys(similarJobsKeys)
    }).catch(err => {
      assert(false)
    })
  })
})

/**
 * 获取在招职位
 * 不需要at/rt
 */
const areaJobsKeys = ["chatTotal", "chatWindowState", "count", "informationStream", "jobLabel", "list", "method", "typeSearch"]
describe('【职位领域】获取在招职位 - requestAreaJobs', function () {
  it('1. 空参数', () => {
    return Job.requestAreaJobs().then(() => {
      assert(false)
    }).catch(err => {
      expect(err.message).to.be.equal('公司ID不能为空')
    })
  })
  it('2. 正常参数', () => {
    return Job.requestAreaJobs(Object.assign({}, baseData, {
      companyNumber: DEFAULT_CONFIG.companyNumber,
      cityId: '530',
      at: DEFAULT_CONFIG.at,
      rt: DEFAULT_CONFIG.rt
    })).then(res => {
      expect(res.data).to.have.all.keys(areaJobsKeys)
    }).catch(err => {
      assert(false)
    })
  })
})

/**
 * 获取在招职位所在城市
 */
const areaJobCityKeys = ["city", "jobType"]
describe('【职位领域】获取在招职位所在城市 - requestRecommendJobs', function () {
  it('1. 空参数', () => {
    return Job.requestAreaJobCity().then(() => {
      assert(false)
    }).catch(err => {
      expect(err.message).to.be.equal('职位编号不能为空')
    })
  })
  it('2. 正常参数', () => {
    return Job.requestAreaJobCity(Object.assign({}, baseData, {
      number: DEFAULT_CONFIG.jobNumber,
      at: DEFAULT_CONFIG.at,
      rt: DEFAULT_CONFIG.rt
    })).then(res => {
      expect(res.data).to.have.all.keys(areaJobCityKeys)
    }).catch(err => {
      assert(false)
    })
  })
})

/**
 * 收藏、取消收藏职位
 */
describe('【职位领域】收藏、取消收藏职位 - requestJobCollection', function () {
  it('1. 空参数', () => {
    return Job.requestJobCollection().then(() => {
      assert(false)
    }).catch(err => {
      expect(err.message).to.be.equal('职位编号不能为空')
    })
  })
  it('2. at、rt必需且正确', () => {
    return Job.requestJobCollection(Object.assign({}, baseData, {
      number: DEFAULT_CONFIG.jobNumber,
      at: 'DEFAULT_CONFIG.at',
      rt: 'DEFAULT_CONFIG.rt'
    })).then(res => {
      expect(res.statusDescription).to.contain('用户凭证失效')
    }).catch(err => {
      assert(false)
    })
  })
  it('3. 正常参数', () => {
    return Job.requestJobCollection(Object.assign({}, baseData, {
      number: DEFAULT_CONFIG.jobNumber,
      at: DEFAULT_CONFIG.at,
      rt: DEFAULT_CONFIG.rt
    })).then(res => {
      expect(res.statusCode).to.be.equal(200)
    }).catch(err => {
      assert(false)
    })
  })
  it('4. 收藏职位', () => {
    return Job.requestJobCollection(Object.assign({}, baseData, {
      number: DEFAULT_CONFIG.jobNumber,
      at: DEFAULT_CONFIG.at,
      rt: DEFAULT_CONFIG.rt,
      operateType: 3
    })).then(res => {
      expect(res.statusCode).to.be.equal(200)
    }).catch(err => {
      assert(false)
    })
  })
  it('5. 取消收藏职位', () => {
    return Job.requestJobCollection(Object.assign({}, baseData, {
      number: DEFAULT_CONFIG.jobNumber,
      at: DEFAULT_CONFIG.at,
      rt: DEFAULT_CONFIG.rt,
      operateType: 7
    })).then(res => {
      expect(res.statusCode).to.be.equal(200)
    }).catch(err => {
      assert(false)
    })
  })
})

/**
 * 投递职位
 */
const jobDeliverKeys = ["actionCode", "actionValue", "failDelivery", "repeatDelivery", "successDelivery"]
describe('【职位领域】投递职位 - requestJobDeliver', function () {
  it('1. 空参数', () => {
    return Job.requestJobDeliver().then(() => {
      assert(false)
    }).catch(err => {
      expect(err.message).to.be.equal('职位编号不能为空')
    })
  })
  it('2. at、rt必需且正确', () => {
    return Job.requestJobDeliver(Object.assign({}, baseData, {
      number: DEFAULT_CONFIG.jobNumber,
      resumeNumber: DEFAULT_CONFIG.resumeNumber,
      deliveryWay: 0,
      stPage: 4020,
      askPageCode: '',
      cycleType: 0,
      cityId: '530',
      at: 'DEFAULT_CONFIG.at',
      rt: 'DEFAULT_CONFIG.rt'
    })).then(res => {
      expect(res.statusDescription).to.contain('用户凭证失效')
    }).catch(err => {
      assert(false)
    })
  })
  it('3. 正常参数', () => {
    return Job.requestJobDeliver(Object.assign({}, baseData, {
      number: DEFAULT_CONFIG.jobNumber,
      resumeNumber: DEFAULT_CONFIG.resumeNumber,
      deliveryWay: 0,
      stPage: 4020,
      askPageCode: '',
      cycleType: 0,
      cityId: '530',
      at: DEFAULT_CONFIG.at,
      rt: DEFAULT_CONFIG.rt
    })).then(res => {
      expect(res.data).to.have.all.keys(jobDeliverKeys)
    }).catch(err => {
      assert(false)
    })
  })
})