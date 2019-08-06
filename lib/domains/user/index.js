import * as entities from './entity'
import * as services from './service'

const userDomain = {
  ...entities,
  ...services
}

export {
  userDomain
}