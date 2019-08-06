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
          rt: '8a5ec8cf79914f318760fea26a263d70'
        })
      } else {
        d.data = qs.stringify(Object.assign({
          at: 'ec1e3ffbd54e4af384c108692459b4e8',
          rt: '8a5ec8cf79914f318760fea26a263d70'
        }, d.data))
      }
    }
    return qs.stringify(d);
  }]
})

export default instance
