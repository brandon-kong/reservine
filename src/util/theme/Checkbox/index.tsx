import { checkboxAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, useColorModeValue } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys)

const baseStyle = definePartsStyle({
  control: {
    _checked: {
      bg: 'var(--color-primary)',
      borderColor: 'var(--color-primary)',
      color: 'white',
    },
    bg: 'white',
    borderColor: 'var(--color-primary)',
  },
})

export const checkboxTheme = defineMultiStyleConfig({ baseStyle })