import axios from 'axios'
import qs from 'querystring'

const instance = axios.create({
  timeout: 3000,
  transformRequest: [function (data, headers) {
    // Do whatever you want to transform the data
    let d = JSON.parse(JSON.stringify(data))
    if (d.hasOwnProperty('url')) {
      if (!d.data) {
        d.data = qs.stringify({
          at: 'ec1e3ffbd54e4af384c108692459b4e8',
          rt: '8a5ec8cf79914f318760fea26a263d70',
          'x-zp-page-request-id': 'a30bdbc956234ce080853ce05bd96a2c-1565167599998-778486',
          'x-zp-client-id': 'a914703c-6065-417a-c71f-2a2b37d02aff'
        })
      } else {
        d.data = qs.stringify(Object.assign({
          at: 'ec1e3ffbd54e4af384c108692459b4e8',
          rt: '8a5ec8cf79914f318760fea26a263d70',
          'x-zp-page-request-id': 'a30bdbc956234ce080853ce05bd96a2c-1565167599998-778486',
          'x-zp-client-id': 'a914703c-6065-417a-c71f-2a2b37d02aff'
        }, d.data))
      }
    }
    return qs.stringify(d);
  }]
})

export default instance
