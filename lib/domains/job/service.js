import * as Job from '../../apis/job'

export function requestJobDetail (args) {
  if (!args || !args.number) {
    return Promise.reject(new Error('职位编号不能为空'))
  } else {
    return Job.requestJobDetail(args)
  }
}
