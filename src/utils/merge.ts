import is from "./is"

const merge = (
  target: { [propName: string]: any }, 
  source: { [propName: string]: any }
) => {
  // const keys1 = Object.keys(target)
  const keys = Object.keys(source)

  for (let i = 0, l = keys.length; i < l; i++) {
    const key = keys[i]
    const value = source[key]

    if (!target.hasOwnProperty(key)) {
      target[key] = value
    } else {
      if (is.plainObject(value)) {
        merge(target[key], value)
      } else {
        target[key] = value
      }
    }
  }

  return target
}

export default merge
