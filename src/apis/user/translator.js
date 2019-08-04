export function userTranslator ({
  username,
  phonenum,
  nickname,
  headIcon,
  email,
  gender
}) {
  return {
    phonenum: phonenum.replace(/^(\d{3})(\d{4})(\d{4})$/, '$1****$3'),
    username,
    nickname,
    headIcon,
    email: email.replace(/^(.{3})([^@]{0,})(@.*)$/, '$1****$3'),
    gender: gender === 1 ? '男' : '女'
  }
}