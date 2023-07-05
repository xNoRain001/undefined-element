const genCSSVariables = (
  styleValue: string, 
  value1: string, 
  value2: string
) => {
  const flag = styleValue === value2
  const startValue = flag ? value1 : value2
  const endValue = flag ? value2 : value1

  return {
    startValue,
    endValue
  }
}

export default genCSSVariables
