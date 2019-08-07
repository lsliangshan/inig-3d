// export function userTranslator ({
//   username,
//   phonenum,
//   nickname,
//   headIcon,
//   email,
//   gender
// }) {
//   return {
//     phonenum: phonenum.replace(/^(\d{3})(\d{4})(\d{4})$/, '$1****$3'),
//     username,
//     nickname,
//     headIcon,
//     email: email.replace(/^(.{3})([^@]{0,})(@.*)$/, '$1****$3'),
//     gender: gender === 1 ? '男' : '女'
//   }
// }

export function personInfoTranslator ({
  PhotoUrl,
  Name,
  userId,
  userType,
  FeedBackUnReadCount,
  ViewCount,
  Resume
}) {
  return {
    headIcon: 'http://mypics.zhaopin.cn' + PhotoUrl,
    username: Name,
    userId,
    userType,
    feedBackUnReadCount: FeedBackUnReadCount,
    viewCount: ViewCount,
    resume: ((resume) => {
      return {
        id: resume.Id || '',
        number: resume.ResumeNumber || '',
        languageId: resume.LangueId,
        intension: ((intension) => {
          let _intension = JSON.parse(JSON.stringify(intension))
          if (_intension && (Object.keys(_intension).length > 0)) {
            for (let itm in _intension) {
              if (_intension.hasOwnProperty(itm)) {
                if (!itm.match(/^[a-z]/)) {
                  _intension[itm.replace(/^[A-Z]/, i => i.toLowerCase())] = JSON.parse(JSON.stringify(_intension[itm]))
                  _intension[itm] = null
                  delete _intension[itm]
                }
              }
            }
          } else {
            _intension = {}
          }
          return _intension
        })(Resume.Intension)
      }
    })(Resume)
  }
}
