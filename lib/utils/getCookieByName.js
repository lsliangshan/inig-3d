import process from 'process'
export default function getCookieByName (name) {
  if (!name) {
    return ''
  }
  let inigIsServer = (process.env.inig_isServer == 'true')
  let inigIsTest = (process.env.inig_isTest === 'true')
  if (!inigIsServer && !inigIsTest) {
    if (!(' ' + document.cookie).match(new RegExp(' ' + name + '='))) {
      return ''
    }
    return document.cookie.replace(new RegExp('(.{0,} ?' + name + '\=)([^;]*)(;?.*)'), '$2')
  } else if (inigIsServer) {
    /**
     * 服务端渲染
     */
    let inigCookies = JSON.parse(process.env.inig_cookies)
    return inigCookies[name] || ''
  } else {
    return ''
  }
}
