
import { APIS } from '../../constants/job'
import { doRequest } from '../base'


// const delegate = 'http://192.168.0.108:3000/Home/index/index'

export function requestJobDetail (args) {
  return doRequest(args, 'requestJobDetail', APIS)
}