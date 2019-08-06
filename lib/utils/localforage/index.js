import localforage from 'localforage'

export const userStore = localforage.createInstance({
  name: "zpm",
  storeName: 'user'
})

export const positionStore = localforage.createInstance({
  name: 'zpm',
  storeName: 'position'
})

export const companyStore = localforage.createInstance({
  name: 'zpm',
  storeName: 'company'
})

export const resumeStore = localforage.createInstance({
  name: 'zpm',
  storeName: 'resume'
})

export const adsStore = localforage.createInstance({
  name: 'zpm',
  storeName: 'ads'
})