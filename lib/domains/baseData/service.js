import * as BaseData from '../../apis/baseData'
import { getBaseDataVersion, setBaseDataVersion } from './entity'

/**
 * 获取公司详情
 * @param {*} args 
 *  {
 *    companyNumber: 'CZ875608890'
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
        if (res.statusCode === 200) {
          // setBaseDataVersion(args.number, res.data, 1 * 60 * 60 * 1000)
        }
        console.log('response: ', res)
        resolve(res)
      }).catch(err => {
        reject(new Error(err.message || '获取失败，请稍后再试'))
      })
    }
  })
}
