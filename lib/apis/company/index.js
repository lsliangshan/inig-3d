import { doGet } from '../base'
import { APIS } from '../../constants/company'

export function requestCompanyDetail (args) {
  return doGet(args, 'requestCompanyDetail', APIS)
}

export function requestCompanyInterview (args) {
  return doGet(args, 'requestCompanyInterview', APIS)
}

export function requestCompanyComment (args) {
  return doGet(args, 'requestCompanyComment', APIS)
}