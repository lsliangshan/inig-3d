export default function paramsTranslator (args, translatorMap) {
  let formatArgs = {}
  for (let k in args) {
    if (args.hasOwnProperty(k)) {
      formatArgs[translatorMap[k] || k] = args[k]
    }
  }
  return formatArgs
}