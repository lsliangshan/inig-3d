import { userStore } from '../../utils/localforage'
import { LOCAL_KEYS } from '../../constants/user'
import { userTranslator } from '../../apis/user/translator'
export async function getUserInfo () {
  let localUserInfo = await userStore.getItem(LOCAL_KEYS.userInfo)
  let userInfo = {}
  if (localUserInfo) {
    userInfo = userTranslator(localUserInfo)
  }
  return userInfo
}