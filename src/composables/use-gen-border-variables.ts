const useGenBorderVariables = (
  style: { [propName: string]: string | number}
) => {
  const { 
    border, 
    borderRadius, 
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius
  } = style
  style['--u-input-container-before-border'] = border
  style['--u-input-container-before-border-top-left-radius'] = 
    borderTopLeftRadius || borderRadius
  style['--u-input-container-before-border-top-right-radius'] = 
    borderTopRightRadius || borderRadius
  style['--u-input-container-before-border-bottom-left-radius'] = 
    borderBottomLeftRadius || borderRadius
  style['--u-input-container-before-border-bottom-right-radius'] = 
    borderBottomRightRadius || borderRadius
}

export default useGenBorderVariables
