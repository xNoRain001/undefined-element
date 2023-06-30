const isPlainObject = (v: any) => Object.prototype.toString.call(v).slice(8, -1) === 'Object'

const is = {
  plainObject: isPlainObject,
}

export default is
