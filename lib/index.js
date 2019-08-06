// import * as constants from './constants/user'
// import utils from './utils'
// import * as apis from './apis/user'
import * as userEntities from './domains/user/entity'
import * as userServices from './domains/user/service'

const user = {
  // apis,
  // constants,
  ...userEntities,
  ...userServices
}

export {
  user
}
