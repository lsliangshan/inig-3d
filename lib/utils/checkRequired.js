import getType from './getType'

export default function checkRequired (key, type) {
  let outFlag = false
  switch (type) {
    case 'String':
      outFlag = (getType(value) === type) && value.trim() !== ''
      break
    default:
      outFlag = (getType(value) === type)
      break
  }
  return outFlag
}
