import { resumeStore } from '../../utils/localforage'

export async function getResumeInfo (key) {
  let localResumeInfo = await resumeStore.getItem(key)
  return localResumeInfo || {}
}

export function setResumeInfo (key, data) {
  resumeStore.setItem(key, data)
}