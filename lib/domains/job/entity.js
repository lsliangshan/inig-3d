import { jobStore } from '../../utils/localforage'

export async function getJobInfo (key) {
  let localJobInfo = await jobStore.getItem(key)
  return localJobInfo || {}
}

export function setJobInfo (key, data) {
  return new Promise(async (resolve, reject) => {
    await jobStore.setItem(key, data).then(res => {
      resolve(true)
    }).catch(err => {
      reject(new Error(err.message))
    })
  })
}

export function getAreaJobs (args) {
  return new Promise(async (resolve, reject) => {
    await jobStore.getItem(args.companyNumber + '-' + args.cityId)
  })
}
