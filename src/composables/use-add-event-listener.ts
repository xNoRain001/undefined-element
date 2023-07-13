const useAddEventListener = (
  container: HTMLElement,
  selector: string, 
  eventType: string,
  callback: () => void
) => {
  const elms = container.querySelectorAll(selector)

  for (let i = 0, l = elms.length; i < l; i++) {
    elms[i].addEventListener(eventType, callback)
  }
}

export default useAddEventListener
