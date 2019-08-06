import axios from '../../utils/axios'
import { APIS } from '../../constants/position'

export function recommend (args) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: APIS.baseUrl + APIS.recommend,
      data: {}
    })
  })
}