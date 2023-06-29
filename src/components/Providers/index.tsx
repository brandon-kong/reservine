'use client'

import { createContext } from 'react'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from '@/util/theme'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

const SupabaseContext = createContext(null)

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <CacheProvider>
            <ChakraProvider theme={theme}>
                {children}
            </ChakraProvider>
        </CacheProvider>
    </>
    
  )
}