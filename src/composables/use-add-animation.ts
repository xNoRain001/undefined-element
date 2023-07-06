const useAddAnimation = (
  elm: HTMLElement, 
  className: string, 
  time: number = 300
) => {
  const { classList } = elm

  classList.add(className)
  setTimeout(() => {
    classList.remove(className)
  }, time)
}

export default useAddAnimation
