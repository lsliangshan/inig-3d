import axios from '../../utils/axios'
import { APIS } from '../../constants/job'

const delegate = 'http://10.2.5.98:3000/Home/index/index'
// const delegate = 'http://192.168.0.108:3000/Home/index/index'

export function requestJobDetail (args) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: delegate,
      data: {
        method: 'get',
        url: APIS.baseUrl + APIS.requestJobDetail,
        data: args || {}
      }
    }).then(({ data }) => {
      let _data = JSON.parse(JSON.stringify(data))
      resolve(_data)
    }).catch(err => {
      reject(new Error(err.message))
    })
  })
}