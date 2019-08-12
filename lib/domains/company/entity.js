import { companyStore } from '../../utils/localforage'

export async function getCompanyInfo (key) {
  let localCompanyInfo = await companyStore.getItem(key)
  return localCompanyInfo || {}
}

export function setCompanyInfo (key, data) {
  companyStore.setItem(key, data)
}
