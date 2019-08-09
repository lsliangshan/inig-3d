
import { APIS } from '../../constants/job'
import { doGet } from '../base'

export function requestJobDetail (args) {
  return doGet(args, 'requestJobDetail', APIS)
}