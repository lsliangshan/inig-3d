import { jobStore } from '../../utils/localforage'

export async function getJobInfo (key) {
  let localJobInfo = await jobStore.getItem(key)
  return localJobInfo || {}
}

export function setJobInfo (key, data) {
  jobStore.setItem(key, data)
}
