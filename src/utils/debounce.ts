const debounce = (
  fn: Function, 
  wait: number, 
  immediate?: boolean
) => {
  let prev = 0
  let timer = 0
  let params: any[]
  let result: any
  let context: any

  const later = () => {
    const remaining = wait - (Date.now() - prev)

    if (remaining > 0) {
      timer = setTimeout(later, remaining);
    } else {
      if (!immediate) {
        result = fn.call(context, ...params)
      }

      timer = 0
    }
  }

  const _debounce = function (...args: any[]) {
    prev = Date.now()
    context = this
    params = args

    if (!timer) {
      timer = setTimeout(later, wait)

      if (immediate) {
        result = fn.call(context, ...params)
      }
    }

    return result
  }

  _debounce.cancel = () => {
    clearTimeout(timer)
    timer = 0
    context = null
    params = []
  }

  return _debounce
}

export default debounce