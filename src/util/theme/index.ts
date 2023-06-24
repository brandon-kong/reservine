import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

import Menu from './Menu'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({
  fonts: {
    heading: 'inherit',
  }, 
  components: {
    MenuList: {
      baseStyle: {
        bg: 'white',
      },
      defaultProps: {
        bg: 'white',
      }
    },
    MenuItem: {
      baseStyle: {
        bg: 'white',
      },
      defaultProps: {
        bg: 'white',
      }
    }

  },
  config
})

export default theme