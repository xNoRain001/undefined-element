const useIsScrollToOffsetPosition = (target: HTMLElement, offset: number) => {
  const { scrollTop, clientHeight, scrollHeight } = target

  return scrollHeight - clientHeight <= scrollTop + offset
}

export default useIsScrollToOffsetPosition
