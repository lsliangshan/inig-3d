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
  at: '2e80b0e4dbad4b55abd5fea6f7349d58',
  rt: 'c8d08a37e2b34df196980126c1178989'
}

const baseData = {
  platform: 13,   // 必填
  pagecode: 4020, // 必填
  appid: 'A23'
}

const recommendJobKeys = ["aaa", "applyType", "bestEmployerLabel", "bestEmployerType", "businessIconPath", "chatWindow", "cityDistrict", "cityId", "commercializationType", "companyAutoID", "companyLogo", "companyName", "companyNumber", "companySize", "companyUrl", "deliveryPath", "distance", "distanceSubways", "education", "emplType", "expandCount", "fastPosition", "featureLabel", "feedbackRation", "futureJob", "futureJobUrl", "hasAppliedPosition", "industry", "industryName", "jobDesc", "jobId", "jobType", "menVipLevel", "menVipUrl", "name", "needMajor", "number", "positionSourceType", "positionURL", "property", "publishTime", "publishTimeDt", "qualifications", "refreshLevelType", "roles", "rootOrgId", "salary", "salary60", "salaryReal", "score", "scoreState", "skillLabel", "staff", "staffId", "tags", "tradingArea", "welfareLabel", "workCity", "workingExp", "workingExpCode"]

describe('职位领域: requestRecommendJobs', function () {
  it('1. 空参数', () => {
    return Job.requestRecommendJobs().then(() => {
      assert(false)
    }).catch(err => {
      expect(err.message).to.be.equal('简历编号不能为空')
    })
  })
  it('2. at、rt不正确', () => {
    return Job.requestRecommendJobs(Object.assign({}, baseData, {
      resumeNumber: DEFAULT_CONFIG.resumeNumber,
      at: 'DEFAULT_CONFIG.at',
      rt: 'DEFAULT_CONFIG.rt'
    })).then(res => {
      expect(res.statusDescription).to.contain('用户凭证失效')
    })
  })
  it('3. 正常参数', () => {
    return Job.requestRecommendJobs(Object.assign({}, baseData, {
      resumeNumber: DEFAULT_CONFIG.resumeNumber,
      at: DEFAULT_CONFIG.at,
      rt: DEFAULT_CONFIG.rt
    })).then(res => {
      expect(res.data.list).to.be.an('array').and.to.be.not.empty.and.to.have.all.keys(recommendJobKeys)
      // expect(res.data.list).to.include.keys()
    })
  })
})
