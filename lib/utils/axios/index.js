import axios from 'axios'
import qs from 'querystring'
import process from 'process'
import getCookieByName from '../getCookieByName'

const instance = axios.create({
  timeout: 10000,
  transformRequest: [function (data, headers) {
    // Do whatever you want to transform the data
    let inigOptions = {}
    try {
      inigOptions = JSON.parse(process.env.inig_options)
    } catch (err) {
      inigOptions = {}
    }
    let d = JSON.parse(JSON.stringify(data))
    let date = (new Date()).getTime()
    if (d.hasOwnProperty('url')) {
      if (!d.data) {
        d.data = qs.stringify(Object.assign({
          t: date,
          version: '0.0.0',
          ip: '127.0.0.1',
          'x-zp-page-request-id': 'a30bdbc956234ce080853ce05bd96a2c-1565167599998-778486',
          'x-zp-client-id': 'a914703c-6065-417a-c71f-2a2b37d02aff'
        }, inigOptions || {}))
      } else {
        d.data = qs.stringify(Object.assign({
          t: date,
          version: '0.0.0',
          ip: '127.0.0.1',
          'x-zp-page-request-id': 'a30bdbc956234ce080853ce05bd96a2c-1565167599998-778486',
          'x-zp-client-id': 'a914703c-6065-417a-c71f-2a2b37d02aff'
        }, inigOptions || {}, d.data))
      }
    }
    return qs.stringify(d)
  }]
})

instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  let at = getCookieByName('at')
  let rt = getCookieByName('rt')
  let inigOptions = {}
  try {
    inigOptions = JSON.parse(process.env.inig_options)
  } catch (err) {
    inigOptions = {}
  }
  inigOptions = Object.assign({}, {
    at: at,
    rt: rt
  }, inigOptions)
  process.env.inig_options = JSON.stringify(inigOptions)
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

export default instance
