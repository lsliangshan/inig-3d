import * as Position from '../../apis/position'

export function requestJobDetail (args) {
  if (!args || !args.number) {
    return Promise.reject(new Error('职位编号不能为空'))
  } else {
    return Position.requestJobDetail(args)
  }
}
