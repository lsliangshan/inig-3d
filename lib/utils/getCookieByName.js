import process from 'process'
export default function getCookieByName (name) {
  if (!name) {
    return ''
  }
  let inigIsServer = (process.env.inig_isServer == 'true')
  if (!inigIsServer) {
    if (!(' ' + document.cookie).match(new RegExp(' ' + name + '='))) {
      return ''
    }
    return document.cookie.replace(new RegExp('(.{0,} ?' + name + '\=)([^;]*)(;?.*)'), '$2')
  } else {
    /**
     * 服务端渲染
     */
    let inigCookies = JSON.parse(process.env.inig_cookies)
    return inigCookies[name] || ''
  }
}
