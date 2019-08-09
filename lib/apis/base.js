import axios from '../utils/axios'

const delegate = 'http://10.2.5.98:3000/Home/index/index'

export function doGet (args, method, APIS) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: delegate,
      data: {
        method: 'get',
        url: APIS.baseUrl + APIS[method],
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

export function doPost (args, method, APIS) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: delegate,
      data: {
        method: 'post',
        url: APIS.baseUrl + APIS[method],
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