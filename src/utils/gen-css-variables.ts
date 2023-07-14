// if flag is true, always return value1.
const genCSSVariables = (flag: boolean, value1: string, value2: string) => ({
  startValue: flag ? value1 : value2,
  endValue: flag ? value2 : value1
})

export default genCSSVariables
