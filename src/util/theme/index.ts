import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { checkboxTheme } from './Checkbox'
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
    Checkbox: checkboxTheme,
  },
  styles: {
    global: {
      body: {
        color: 'var(--text-primary)',
      }
    }
  },
  colors: {
    primary: {
      50: 'var(--text-primary)',
      100: 'var(--text-primary)',
      200: 'var(--text-primary)',
      300: 'var(--text-primary)',
    }
  },
  config
})

export default theme