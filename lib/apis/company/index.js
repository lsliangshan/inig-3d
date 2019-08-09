import axios from '../../utils/axios'
import { APIS } from '../../constants/company'

const delegate = 'http://10.2.5.98:3000/Home/index/index'

export function requestCompanyDetail (args) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: delegate,
      data: {
        method: 'get',
        url: APIS.baseUrl + APIS.requestCompanyDetail,
        data: args || {}
      }
    }).then(({ data }) => {
      resolve(data)
    }).catch(err => {
      reject(new Error(err.message))
    })
  })
}

export function requestCompanyInterview (args) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: delegate,
      data: {
        method: 'get',
        url: APIS.baseUrl + APIS.requestCompanyInterview,
        data: args || {}
      }
    }).then(({ data }) => {
      resolve(data)
    }).catch(err => {
      reject(new Error(err.message))
    })
  })
}

export function requestCompanyComment (args) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: delegate,
      data: {
        method: 'get',
        url: APIS.baseUrl + APIS.requestCompanyComment,
        data: args || {}
      }
    }).then(({ data }) => {
      resolve(data)
    }).catch(err => {
      reject(new Error(err.message))
    })
  })
}