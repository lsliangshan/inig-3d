import { decrypt } from '../../utils/encrypt'
export function baseDataVersionTranslator (data) {
  return Object.assign({}, data, data.data ? {
    data: decrypt(data.data)
  } : {})
}