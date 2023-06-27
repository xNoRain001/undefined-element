const throttle = (
  fn: Function, 
  wait = 200, 
  options = { leading: true, trailing: false }
) => {
  const { leading = true, trailing = false } = options
  let context
  let result
  let parmas: any[] = []
  let timer = Number.MIN_SAFE_INTEGER
  let prev = 0

  const clear = () => {
    context = null
    timer = Number.MIN_SAFE_INTEGER
    parmas = []
  }

  const later = () => {
    prev = leading ? Date.now() : 0
    result = fn.call(context, ...parmas)
    clear()
  }

  const _throttle = function (...args) {
    const _now = Date.now()

    parmas = args
    context = this

    if (!prev && !leading) {
      prev = _now
    }

    const remaining = wait - (_now - prev)

    if (remaining <= 0 || remaining > wait) {
      if (timer) {
        clearTimeout(timer)
      }

      prev = _now
      result = fn.call(context, ...parmas)

      clear()

      return result
    } 
    
    if (!timer && trailing) {
      timer = setTimeout(later, remaining)

      return result
    }
  }

  _throttle.cancle = () => {
    clearTimeout(timer)
    prev = 0
    clear()
  }

  return _throttle
}

export default throttle
