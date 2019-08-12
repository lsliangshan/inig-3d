import * as Resume from '../../apis/resume'
// import { setResumeInfo } from './entity'
import isEmpty from '../../utils/isEmpty';

const APISS = {
  baseUrl: 'https://capi.zhaopin.com',
  requestResumeGetNode: '/capi/resume/getResumeNode', // 获取简历节点信息
  requestResumeSetNode: '/capi/resume/saveResumeNode', // 添加或更新简历节点信息
  requestResumeDeleteNode: '/capi/resume/deleteResumeNode', // 删除简历节点信息
  requestResumePreview: '/capi/resume/preview', // 预览简历
  requestResumeDelete: '/capi/resume/delete', // 删除简历
  requestResumeOperate: '/capi/resume/operate', // 刷新简历、设置或取消默认简历、加密或公开简历、取消委托投递简历操作
  requestResumeList: '/capi/resume/getResumeNode', // 获取简历列表
  requestResumeTopService: '/capi/userpay/getServiceStatus', // 获取简历置顶服务
  requestResumeModifyName: '/capi/resume/modifyName', // 修改简历名称
  requestResumeGreenScan: '/capi/resume/getGreenScan', // 简历头像图片鉴定
  requestResumeUploadImage: '/capi/more/updateImage', // 简历上传头像
  requestResumeSetNodePC: '/capi/resume/saveResumeNodePC', // 添加或更新简历节点信息PC
  requestResumeCreatePC: '/capi/resume/createBlankResumePC', // 创建简历PC
  requestResumeIntegrityPC: '/capi/resume/getResumeNodePC', // 获取简历完整度PC
  requestResumeStatus: '/capi/resume/GetCurrentStatuus', // 获取完善到简历的第几步
}

const isRequire = () => { throw new Error('参数必传') }

const validateResumeCommonParms = (args) => {
  let errMessage = ''
  if (isEmpty(args)) {
    errMessage = '参数不能为空对象'
  } else {
    if (!args.resumeId) {
      errMessage = '简历ID不能为空，类型为String'
    } else if (!args.resumeNumber) {
      errMessage = '简历编号不能为空，类型为String'
    }
  }
  return errMessage ? { validateResult: false, errMessage } : { validateResult: true, errMessage }
}

/**
 * 获取简历节点信息
 * @param {*} args 
 *  {
 *    resumeId: '312604895',
 *    resumeNumber: 'JL203611385R90500000000'
 *    resumeVersion: '1' // 简历版本号
 *    resumeLanguage: 1  // 简历语言：1-中文，2-英文 ，3-中英文
 *    nodeName: 'WorkExperience' // 节点名称
 *  }
 *  详细节点名称：
 *  Profile：个人信息，JobTarget：求职意向，WorkExperience：工作经验，EducationExperience：教育背景，ProjectExperience：项目经验，
 *  SelfEvaluation；自我评价，LanguageSkill: 语言能力，TrainExperience 培训经历，ProfessionalSkill 专业技能，Certificate 证书，Attach：图片附件
 * @return Promise
 */
export function requestResumeGetNode (args = isRequire()) {
  return new Promise(async (resolve, reject) => {
    const { validateResult, errMessage } = validateResumeCommonParms(args)
    if (!validateResult) {
      return reject(new Error(errMessage))
    } else if (!args.nodeName) {
      return reject(new Error('简历节点名称不能为空，类型为String'))
    } else {
      if (!args.resumeVersion) {
        args.resumeVersion = 1
      } else if (!args.resumeLanguage) {
        args.resumeLanguage = 1
      }
      await Resume.requestResumeGetNode(args).then((res) => {
        resolve(res)
      }).catch(err => {
        reject(new Error(err.message || '获取失败，请稍后再试'))
      })
    }
  })
}

/**
 * 添加或更新简历节点信息
 * @param {*} args 
 *  {
 *    resumeId: '312604895',
 *    resumeNumber: 'JL203611385R90500000000'
 *    resumeVersion: '1' // 简历版本号
 *    resumeLanguage: 1  // 简历语言：1-中文，2-英文 ，3-中英文
 *    nodeName: 'WorkExperience' // 节点名称,
 *    values: {} // 节点内具体属性参数
 *  }
 *  详细节点名称：
 *  Profile：个人信息，JobTarget：求职意向，WorkExperience：工作经验，EducationExperience：教育背景，ProjectExperience：项目经验，
 *  SelfEvaluation；自我评价，LanguageSkill: 语言能力，TrainExperience 培训经历，ProfessionalSkill 专业技能，Certificate 证书，Attach：图片附件
 * @return Promise
 */
export function requestResumeSetNode (args = isRequire()) {
  return new Promise(async (resolve, reject) => {
    const { validateResult, errMessage } = validateResumeCommonParms(args)
    if (!validateResult) {
      return reject(new Error(errMessage))
    } else if (!args.nodeName) {
      return reject(new Error('简历节点名称不能为空，类型为String'))
    } else if (!args.values) {
      return reject(new Error('添加或更新节点内属性存在错误'))
    } else {
      if (!args.resumeVersion) {
        args.resumeVersion = 1
      } else if (!args.resumeLanguage) {
        args.resumeLanguage = 1
      }
      await Resume.requestResumeSetNode(args).then((res) => {
        resolve(res)
      }).catch(err => {
        reject(new Error(err.message || '获取失败，请稍后再试'))
      })
    }
  })
}

/**
 * 删除简历节点信息
 * @param {*} args 
 *  {
 *    resumeId: '312604895',
 *    resumeNumber: 'JL203611385R90500000000'
 *    resumeVersion: '1' // 简历版本号
 *    resumeLanguage: 1  // 简历语言：1-中文，2-英文 ，3-中英文
 *    nodeName: 'WorkExperience' // 节点名称,
 *    values: {} // 节点内具体属性参数
 *  }
 *  详细节点名称：
 *  Profile：个人信息，JobTarget：求职意向，WorkExperience：工作经验，EducationExperience：教育背景，ProjectExperience：项目经验，
 *  SelfEvaluation；自我评价，LanguageSkill: 语言能力，TrainExperience 培训经历，ProfessionalSkill 专业技能，Certificate 证书，Attach：图片附件
 * @return Promise
 */
export function requestResumeDeleteNode (args = isRequire()) {
  return new Promise(async (resolve, reject) => {
    const { validateResult, errMessage } = validateResumeCommonParms(args)
    if (!validateResult) {
      return reject(new Error(errMessage))
    } else if (!args.nodeName) {
      return reject(new Error('简历节点名称不能为空，类型为String'))
    } else if (!args.markId) {
      return reject(new Error('删除简历节点参数markId存在错误'))
    } else {
      if (!args.resumeVersion) {
        args.resumeVersion = 1
      } else if (!args.resumeLanguage) {
        args.resumeLanguage = 1
      }
      await Resume.requestResumeDeleteNode(args).then((res) => {
        resolve(res)
      }).catch(err => {
        reject(new Error(err.message || '获取失败，请稍后再试'))
      })
    }
  })
}


/**
 * 预览简历
 * @param {*} args 
 *  {
 *    resumeId: '312604895',
 *    resumeNumber: 'JL203611385R90500000000'
 *    resumeVersion: '1' // 简历版本号
 *    resumeLanguage: 1  // 简历语言：1-中文，2-英文 ，3-中英文
 *    ignoreEmpty: 0 // 1忽略空节点，0或者不传递该参数表示不忽略空节点,
 *  }
 * @return Promise
 */
export function requestResumePreview (args = isRequire()) {
  return new Promise(async (resolve, reject) => {
    const { validateResult, errMessage } = validateResumeCommonParms(args, exclude)
    if (!validateResult) {
      return reject(new Error(errMessage))
    } else {
      if (!args.resumeVersion) {
        args.resumeVersion = 1
      } else if (!args.resumeLanguage) {
        args.resumeLanguage = 1
      }
      await Resume.requestResumePreview(args).then((res) => {
        resolve(res)
      }).catch(err => {
        reject(new Error(err.message || '获取失败，请稍后再试'))
      })
    }
  })
}

/**
 * 删除简历
 * @param {*} args 
 *  {
 *    resumeId: '312604895',
 *    resumeNumber: 'JL203611385R90500000000'
 *    resumeVersion: '1' // 简历版本号
 *    resumeLanguage: 1  // 简历语言：1-中文，2-英文 ，3-中英文
 *  }
 * @return Promise
 */
export function requestResumeDelete (args = isRequire()) {
  return new Promise(async (resolve, reject) => {
    const { validateResult, errMessage } = validateResumeCommonParms(args, exclude)
    if (!validateResult) {
      return reject(new Error(errMessage))
    } else {
      if (!args.resumeVersion) {
        args.resumeVersion = 1
      } else if (!args.resumeLanguage) {
        args.resumeLanguage = 1
      }
      await Resume.requestResumeDelete(args).then((res) => {
        resolve(res)
      }).catch(err => {
        reject(new Error(err.message || '获取失败，请稍后再试'))
      })
    }
  })
}