export default function getCookieByName (name) {
  if (!name || !(' ' + document.cookie).match(new RegExp(' ' + name + '='))) {
    return ''
  }
  return document.cookie.replace(new RegExp('(.{0,} ?' + name + '\=)([^;]*)(;?.*)'), '$2')
}
