import * as BaseData from '../../apis/baseData'
import { getBaseDataVersion, setBaseDataVersion, getBaseData, setBaseData, clearBaseData } from './entity'

/**
 * 同步基础数据版本号,
 * 1小时同步一次
 */
function syncBaseDataVersion (args) {
  return new Promise(async (resolve) => {
    let localSynchronized = await getBaseDataVersion('base-data-version-synchronized')
    if (!localSynchronized) {
      await BaseData.requestBaseDataVersion(args).then((res) => {
        if (res.statusCode === 200 && res.data && res.data.details) {
          res.data.details.forEach(async (item) => {
            let localVersion = await getBaseDataVersion(item.itemName)
            // let _v = Math.floor(Math.random() * 100) || item.version
            if (!localVersion || (localVersion != item.version)) {
              // 本地无基础数据版本号，或本地基础数据版本号与服务端不一样，则更新本地基础数据版本号
              clearBaseData(args.keys)
              clearBaseData('full-' + args.keys)
              setBaseDataVersion(item.itemName, item.version)
            }
          })
        }
        setBaseDataVersion('base-data-version-synchronized', true, 1 * 60 * 60 * 1000)
        resolve(true)
      }).catch(err => {
        reject(new Error(err.message || '基础数据版本号同步失败，请稍后再试'))
      })
    } else {
      resolve(true)
    }
  })
}

/**
 * 获取基础数据版本
 * @param {*} args 
 *  {
 *    keys: 'education,job_type'
 *  }
 * @return Promise
 */
export function requestBaseDataVersion (args) {
  return new Promise(async (resolve, reject) => {
    let data = await getBaseDataVersion(args.keys)
    if (data) {
      return resolve({
        statusCode: 200,
        data: data || {}
      })
    } else {
      await BaseData.requestBaseDataVersion(args).then((res) => {
        if (res.statusCode === 200 && res.data && res.data.details) {
          res.data.details.forEach(item => {
            setBaseDataVersion(item.itemName, item.version)
          })
        }
        resolve(res)
      }).catch(err => {
        reject(new Error(err.message || '获取失败，请稍后再试'))
      })
    }
  })
}

/**
 * 获取基础数据
 * @param {*} args 
 *  {
 *    dictName: 'industry',
 *    code: '100000000',
 *    withSublist: false
 *  }
 * @return Promise
 */
export function requestBaseData (args) {
  return new Promise(async (resolve, reject) => {
    syncBaseDataVersion({
      keys: args.dictName
    })
    let data = await getBaseData((args.withSublist ? 'full-' : '') + args.dictName + '-' + args.code)
    if (data) {
      console.log('data from cache: ', data)
      return resolve({
        statusCode: 200,
        data: data || {}
      })
    } else {
      await BaseData.requestBaseData(args).then((res) => {
        if (res.statusCode === 200 && res.data) {
          setBaseData((args.withSublist ? 'full-' : '') + args.dictName + '-' + args.code, res.data)
        }
        console.log('response: ', res)
        resolve(res)
      }).catch(err => {
        reject(new Error(err.message || '获取失败，请稍后再试'))
      })
    }
  })
}

