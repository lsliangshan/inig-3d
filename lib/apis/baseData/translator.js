import { decrypt } from '../../utils/encrypt'
export function baseDataVersionTranslator (str) {
  return decrypt(str)
}