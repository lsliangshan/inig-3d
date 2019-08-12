import axios from 'axios'
import qs from 'querystring'

const instance = axios.create({
  timeout: 10000,
  transformRequest: [function (data, headers) {
    // Do whatever you want to transform the data
    let d = JSON.parse(JSON.stringify(data))
    let date = (new Date()).getTime()
    if (d.hasOwnProperty('url')) {
      if (!d.data) {
        d.data = qs.stringify(Object.assign({
          t: date,
          version: '0.0.0',
          ip: '127.0.0.1',
          at: 'b192998b0826455f8b8d442810382db5',
          rt: '610cbc4794cf48199ec06edbe2da29b9',
          'x-zp-page-request-id': 'a30bdbc956234ce080853ce05bd96a2c-1565167599998-778486',
          'x-zp-client-id': 'a914703c-6065-417a-c71f-2a2b37d02aff'
        }, global.INIG_OPTIONS))
      } else {
        d.data = qs.stringify(Object.assign({
          t: date,
          version: '0.0.0',
          ip: '127.0.0.1',
          at: 'b192998b0826455f8b8d442810382db5',
          rt: '610cbc4794cf48199ec06edbe2da29b9',
          'x-zp-page-request-id': 'a30bdbc956234ce080853ce05bd96a2c-1565167599998-778486',
          'x-zp-client-id': 'a914703c-6065-417a-c71f-2a2b37d02aff'
        }, d.data, INIG_OPTIONS))
      }
    }
    return qs.stringify(d);
  }]
})

export default instance
