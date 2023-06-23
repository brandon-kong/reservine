'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from '@/util/theme'

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <CacheProvider>
            <ChakraProvider>
                {children}
            </ChakraProvider>
        </CacheProvider>
    </>
    
  )
}