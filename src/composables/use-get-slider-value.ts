const useGetSliderValue = (value: number, step: number) => {
  const mod = value % step

  value -= mod

  if (mod >= step / 2) {
    value += step
  }

  return value
}

export default useGetSliderValue
