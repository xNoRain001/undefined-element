// from @quasar package
import * as sharpIcons from '../../assets/icons/sharp'
import * as filledIcons from '../../assets/icons/filled'
import * as roundedIcons from '../../assets/icons/rounded'
import * as outlinedIcons from '../../assets/icons/outlined'

const icons: {
  sharp: { [propName: string]: string },
  filled: { [propName: string]: string },
  rounded: { [propName: string]: string },
  outlined: { [propName: string]: string }
} = {
  sharp: sharpIcons,
  filled: filledIcons,
  rounded: roundedIcons,
  outlined: outlinedIcons
}

export default icons