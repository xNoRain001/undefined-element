const dialogPosition = {
  top () {
    return {
      left: '50%',
      transform: 'translateX(-50%)',
    }
  },

  right () {
    return {
      top: '50%',
      transform: 'translateY(-50%)'
    }
  },

  bottom () {
    return {
      left: '50%',
      transform: 'translateX(-50%)'
    }
  },

  left () {
    return {
      top: '50%',
      transform: 'translateY(-50%)'
    }
  },

  center () {
    return {
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)'
    }
  }
}

export default dialogPosition
