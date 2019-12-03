import { baseDataVersionStore, setItem, getItem } from '../../utils/localforage'

export function getBaseDataVersion (key) {
  return new Promise(async (resolve) => {
    await getItem({
      key: key,
      store: baseDataVersionStore
    }).then(data => {
      resolve(data)
    })
  })
  // let localCompanyInfo = await companyStore.getItem(key)
  // return localCompanyInfo || {}
}

export function setBaseDataVersion (key, data, expiredAt) {
  return new Promise(async (resolve) => {
    await setItem({
      key: key,
      expiredAt: expiredAt || 1 * 60 * 60 * 1000,
      store: baseDataVersionStore,
      data: data
    })
    resolve(true)
  })
}
