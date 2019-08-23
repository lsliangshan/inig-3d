import * as Resume from '../../apis/resume'
// import { setResumeInfo } from './entity'
import isEmpty from '../../utils/isEmpty'

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
 *    resumeNumber: 'JL203611385R90500000000',
 *    resumeVersion: '1', // 简历版本号
 *    resumeLanguage: 1,  // 简历语言：1-中文，2-英文 ，3-中英文
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
      reject(new Error(errMessage))
    } else if (!args.nodeName) {
      reject(new Error('简历节点名称不能为空，类型为String'))
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
 *    resumeNumber: 'JL203611385R90500000000',
 *    resumeVersion: '1', // 简历版本号
 *    resumeLanguage: 1,  // 简历语言：1-中文，2-英文 ，3-中英文
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
      reject(new Error(errMessage))
    } else if (!args.nodeName) {
      reject(new Error('简历节点名称不能为空，类型为String'))
    } else if (!args.values) {
      reject(new Error('添加或更新节点内属性存在错误'))
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
 *    resumeNumber: 'JL203611385R90500000000',
 *    resumeVersion: '1', // 简历版本号
 *    resumeLanguage: 1,  // 简历语言：1-中文，2-英文 ，3-中英文
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
      reject(new Error(errMessage))
    } else if (!args.nodeName) {
      reject(new Error('简历节点名称不能为空，类型为String'))
    } else {
      if (['Profile', 'JobTarget', 'ProfileMobileOutEmail'].indexOf(args.nodeName) < 0) {
        if (!args.markId) {
          reject(new Error('删除简历节点参数markId存在错误'))
        }
      }
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
 *    resumeVersion: '1', // 简历版本号
 *    resumeLanguage: 1,  // 简历语言：1-中文，2-英文 ，3-中英文
 *    ignoreEmpty: 0 // 1忽略空节点，0或者不传递该参数表示不忽略空节点,
 *  }
 * @return Promise
 */
export function requestResumePreview (args = isRequire()) {
  return new Promise(async (resolve, reject) => {
    const { validateResult, errMessage } = validateResumeCommonParms(args)
    if (!validateResult) {
      reject(new Error(errMessage))
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
 *    resumeNumber: 'JL203611385R90500000000',
 *    resumeVersion: '1', // 简历版本号
 *    resumeLanguage: 1,  // 简历语言：1-中文，2-英文 ，3-中英文
 *  }
 * @return Promise
 */
export function requestResumeDelete (args = isRequire()) {
  return new Promise(async (resolve, reject) => {
    const { validateResult, errMessage } = validateResumeCommonParms(args)
    if (!validateResult) {
      reject(new Error(errMessage))
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

/**
 * 操作简历-刷新、设置或取消默认简历、设置或取消公开简历
 * @param {*} args 
 *  {
 *    resumeId: '312604895',
 *    resumeNumber: 'JL203611385R90500000000',
 *    resumeVersion: '1', // 简历版本号
 *    resumeLanguage: 1,  // 简历语言：1-中文，2-英文 ，3-中英文
 *    operateType: 0 // 操作类型 0-刷新简历 1-设置默认简历 8-取消默认简历 4-设置公开简历 6-取消公开简历
 *  }
 * @return Promise
 */
export function requestResumeOperate (args = isRequire()) {
  return new Promise(async (resolve, reject) => {
    const { validateResult, errMessage } = validateResumeCommonParms(args)
    if (!validateResult) {
      reject(new Error(errMessage))
    } else if (!args.operateType && args.operateType !== 0) {
      reject(new Error('简历操作类型不能为空，类型为Number'))
    } else {
      if (!args.resumeVersion) {
        args.resumeVersion = 1
      } else if (!args.resumeLanguage) {
        args.resumeLanguage = 1
      }
      await Resume.requestResumeOperate(args).then((res) => {
        resolve(res)
      }).catch(err => {
        reject(new Error(err.message || '获取失败，请稍后再试'))
      })
    }
  })
}

/**
 * 获取简历列表PC
 * @return Promise
 */
export function requestResumeListPC () {
  return new Promise(async (resolve, reject) => {
    await Resume.requestResumeListPC({
      resumeNumber: '1', // 任意字符串
      nodeName: 'ListStr' // 简历列表节点
    }).then((res) => {
      resolve(res)
    }).catch(err => {
      reject(new Error(err.message || '获取失败，请稍后再试'))
    })
  })
}

/**
 * 获取简历置顶服务
 * @param {*} args 
 *  {
 *    sid: '16608a08e69b475e886f1ac22db0d8cc', // 服务id
 *    businessInfo: 'JL203611385R90500000000_1', // 服务标识，比如ResumeNumber_1(简历编号_简历版本号)
 *  }
 * @return Promise
 */
export function requestResumeTopService (args = isRequire()) {
  return new Promise(async (resolve, reject) => {
    if (!args.sid) {
      reject(new Error('简历置顶服务id不能为空，类型为String'))
    } else if (!args.businessInfo) {
      reject(new Error('简历置顶标识不能为空，类型为String'))
    } else {
      await Resume.requestResumeTopService(args).then((res) => {
        resolve(res)
      }).catch(err => {
        reject(new Error(err.message || '获取失败，请稍后再试'))
      })
    }
  })
}

/**
 * 修改简历名称
 * @param {*} args 
 *  {
 *    resumeName: '测试简历'
 *    resumeId: '312604895',
 *    resumeNumber: 'JL203611385R90500000000',
 *    resumeVersion: '1', // 简历版本号
 *    resumeLanguage: 1,  // 简历语言：1-中文，2-英文 ，3-中英文
 *  }
 * @return Promise
 */
export function requestResumeModifyName (args = isRequire()) {
  return new Promise(async (resolve, reject) => {
    const { validateResult, errMessage } = validateResumeCommonParms(args)
    if (!validateResult) {
      reject(new Error(errMessage))
    } else if (!args.resumeName) {
      reject(new Error('简历名称不能为空，类型为String'))
    } else {
      if (!args.resumeVersion) {
        args.resumeVersion = 1
      } else if (!args.resumeLanguage) {
        args.resumeLanguage = 1
      }
      await Resume.requestResumeModifyName(args).then((res) => {
        resolve(res)
      }).catch(err => {
        reject(new Error(err.message || '获取失败，请稍后再试'))
      })
    }
  })
}

/**
 * 获取完善到简历的第几步
 * @param {*} args
 *  {
 *    resumeId: '312604895',
 *    resumeNumber: 'JL203611385R90500000000',
 *    resumeVersion: '1', // 简历版本号
 *    resumeLanguage: 1,  // 简历语言：1-中文，2-英文 ，3-中英文
 *  }
 * @return Promise
 */
export function requestResumeStatus (args = isRequire()) {
  return new Promise(async (resolve, reject) => {
    const { validateResult, errMessage } = validateResumeCommonParms(args)
    if (!validateResult) {
      reject(new Error(errMessage))
    } else {
      if (!args.resumeVersion) {
        args.resumeVersion = 1
      } else if (!args.resumeLanguage) {
        args.resumeLanguage = 1
      }
      await Resume.requestResumeStatus(args).then((res) => {
        resolve(res)
      }).catch(err => {
        reject(new Error(err.message || '获取失败，请稍后再试'))
      })
    }
  })
}

/**
 * 简历头像图片鉴定PC
 * @param {*} args
 *  {
 *    url: 'http://mypics.zhaopin.cn/attachment/2019/08/07/c12ad23a-cbf5-4300-bf63-36ab28176a80.png',
 *  }
 * @return Promise
 */
export function requestResumeGreenScanPC (args = isRequire()) {
  return new Promise(async (resolve, reject) => {
    if (!args.url) {
      reject(new Error('简历头像地址不能为空，类型为String'))
    } else {
      await Resume.requestResumeGreenScanPC(args).then((res) => {
        resolve(res)
      }).catch(err => {
        reject(new Error(err.message || '获取失败，请稍后再试'))
      })
    }
  })
}