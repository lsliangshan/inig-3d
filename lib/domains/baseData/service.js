import * as BaseData from '../../apis/baseData'
import { getBaseDataVersion, setBaseDataVersion, getBaseData, setBaseData } from './entity'

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
    let data = await getBaseData(args.keys)
    if (data) {
      return resolve({
        statusCode: 200,
        data: data || {}
      })
    } else {
      await BaseData.requestBaseData(args).then((res) => {
        // if (res.statusCode === 200 && res.data && res.data.details) {
        //   res.data.details.forEach(item => {
        //     setBaseData(item.itemName, item.version)
        //   })
        // }
        console.log('response: ', res)
        resolve(res)
      }).catch(err => {
        reject(new Error(err.message || '获取失败，请稍后再试'))
      })
    }
  })
}

