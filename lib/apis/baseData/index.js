import { doGet } from '../base'
import { APIS } from '../../constants/baseData'
// import { baseDataVersionTranslator } from './translator'

/**
 * 获取基础数据版本
 * @param {*} args 
 */
export function requestBaseDataVersion (args) {
  // return doGet(args, 'requestCompanyDetail', APIS)
  return new Promise((resolve, reject) => {
    doGet(args, 'requestBaseDataVersion', APIS).then(data => {
      // let _data = JSON.parse(JSON.stringify(data))
      // if (data.statusCode === 200) {
      //   _data.data = baseDataVersionTranslator(_data)
      // }
      resolve(data)
    }).catch(err => {
      reject(new Error(err.message))
    })
  })
}
