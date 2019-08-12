export default function getType (value) {
  return Object.prototype.toString.call(value).replace(/^.* ([a-zA-Z]*)\]$/, '$1')
}
