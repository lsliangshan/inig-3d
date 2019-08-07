import * as User from '../../apis/user'
import { isEmpty } from '../../utils'

/**
 * 虽然是 import * as User from '../../apis/user'，但是是按需导入的，引用了User.login只会导入login的代码
 */

export function login (args) {
  if (isEmpty(args)) {
    return Promise.reject(new Error('用户名密码不能为空'))
  } else {
    return User.login(args)
  }
}

export function register (args) {
  return '注册成功'
}

export function requestPersonInfo () {
  return User.requestPersonInfo()
}

export function requestUserDetail () {
  return User.requestUserDetail()
}
