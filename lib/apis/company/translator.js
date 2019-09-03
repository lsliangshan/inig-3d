export function companyInfoTranslator (data) {
  const latitude = Number((data.coordinate || {}).latitude)
  const longitude = Number((data.coordinate || {}).longitude)
  let vipLogo = ''
  let bestType = data.bestEmployerType
  if (bestType && Number(bestType) === 1) {
    vipLogo = '//desktop-bucket.zhaopin.cn/assets/best-tag.png'
  } else if (bestType && Number(bestType) === 2) {
    // 优选雇主
    vipLogo = '//common-bucket.zhaopin.cn/img/icon-preferred-tag/icon-preferred-tag-1.0.0.png'
  } else if (data.menVipLevel) {
    let vipLevel = data.menVipLevel
    if (Number(vipLevel) === 1002) {
      vipLogo = '//img03.zhaopin.cn/IHRNB/img/detailviph.png'
    } else if (Number(vipLevel) === 1003 || Number(vipLevel) === 1004 || Number(vipLevel) === 1005) {
      vipLogo = '//img03.zhaopin.cn/IHRNB/img/detailvipm.png'
    }
  } else {
  }
  return {
    address: data.address,
    city: data.cityName,
    cityId: data.cityCode,
    companyId: data.companyId,
    companySize: data.companySize,
    companyType: data.property,
    companyUrl: data.companyWebsiteUrl,
    description: data.companyDescWithHtml,
    industries: (data.industry || '').split(',').join('、').split('/').join('、'),
    introduceUrl: data.url,
    logoUrl: data.companyLogo,
    jobNumber: data.positionsNumber,
    rootCompanyId: data.companyRootId,
    tags: (data.brightSpotLabel || []).map(item => item.value),
    title: data.companyName,
    vipInfo: {
      level: data.menVipLevel
    },
    vipLogo: vipLogo,
    orgInfoPics: (data.companyInfoPics || []).map(item => ({
      orgPic1: item.pic1,
      orgPic2: item.pic2
    })),
    employerType: data.bestEmployerType,
    coordinate: latitude && longitude ? { latitude, longitude } : null,
    bestEmployerLabel: data.bestEmployerLabel,
    videoUrl: data.videoUrl
  }
}