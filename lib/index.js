import process from 'process'
// import * as constants from './constants/user'
// import utils from './utils'
// import * as apis from './apis/user'
// import * as userEntities from './domains/user/entity'
// import * as userServices from './domains/user/service'

// const user = {
//   // apis,
//   // constants,
//   ...userEntities,
//   ...userServices
// }

// export {
//   user
// }
export function INIG (options) {
  if (options.isServer) {
    /**
     * 服务端渲染
     */
    process.env.inig_cookies = JSON.stringify(options.ctx.request.cookies.all())
  }
  process.env.inig_isServer = JSON.stringify(options.isServer)
  process.env.inig_options = JSON.stringify(options.options)
}
