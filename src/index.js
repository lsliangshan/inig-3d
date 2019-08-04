// import * as constants from './constants/user'
// import utils from './utils'
// import * as apis from './apis/user'
import * as userDomains from './domains/user'

const user = {
  // apis,
  // constants,
  ...userDomains
}

export {
  user
}
