import axios from '../../utils/axios'
import { APIS, LOCAL_KEYS } from '../../constants/user'
import { userTranslator, personInfoTranslator } from './translator'
import { userStore } from '../../utils/localforage'

const delegate = 'http://10.2.5.98:3000/Home/index/index'

export function requestPersonInfo () {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: delegate,
      data: {
        method: 'get',
        url: APIS.baseUrl + APIS.getUserInfo
      }
    }).then(({ data }) => {
      let _data = JSON.parse(JSON.stringify(data))
      if (data.code === 200) {
        _data.data = personInfoTranslator(_data.data)
      }
      resolve(_data)
    }).catch(err => {
      reject(new Error(err.message))
    })
  })
}

export function requestUserDetail () {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: delegate,
      data: {}
    })
  })
}

export function login (args) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: APIS.baseUrl + APIS.login,
      data: args
    }).then(res => {
      let data = JSON.parse(JSON.stringify(res.data))
      if (data.status === 200) {
        data.data = userTranslator(data.data)
        userStore.setItem(LOCAL_KEYS.userInfo, res.data.data)
        resolve(Object.assign({}, res, {
          data: data
        }))
      } else {
        resolve(res)
      }
    }).catch(err => {
      reject(new Error(err.message || '登录失败，请稍后再试'))
    })
  })
}

export function register (args) {
  console.log('inner register')
  return Promise.resolve({})
}
