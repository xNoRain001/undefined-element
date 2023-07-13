const tooltipPosition = {
  top (
    clientWidth: number, 
    clientHeight: number, 
    top: number, 
    right: number, 
    bottom: number, 
    left: number, 
    centerX: number, 
    centerY: number
  ) {
    return {
      left: centerX,
      top: top - clientHeight
    }
  },

  right (
    clientWidth: number, 
    clientHeight: number, 
    top: number, 
    right: number, 
    bottom: number, 
    left: number, 
    centerX: number, 
    centerY: number
  ) {
    return {
      left: right,
      top: centerY
    }
  },

  bottom (
    clientWidth: number, 
    clientHeight: number, 
    top: number, 
    right: number, 
    bottom: number, 
    left: number, 
    centerX: number, 
    centerY: number
  ) {
    return {
      left: centerX,
      top: bottom
    }
  },

  left (
    clientWidth: number, 
    clientHeight: number, 
    top: number, 
    right: number, 
    bottom: number, 
    left: number, 
    centerX: number, 
    centerY: number
  ) {
    return {
      left: left - clientWidth,
      top: centerY
    }
  }
}

export default tooltipPosition
