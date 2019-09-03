import { companyStore, setItem, getItem } from '../../utils/localforage'

export function getCompanyInfo (key) {
  return new Promise(async (resolve) => {
    await getItem({
      key: key,
      store: companyStore
    }).then(data => {
      resolve(data)
    })
  })
  // let localCompanyInfo = await companyStore.getItem(key)
  // return localCompanyInfo || {}
}

export function setCompanyInfo (key, data, expiredAt) {
  // companyStore.setItem(key, data)
  return new Promise(async (resolve) => {
    await setItem({
      key: key,
      expiredAt: expiredAt || 1 * 60 * 60 * 1000,
      store: companyStore,
      data: data
    })
    resolve(true)
  })
}
