import {
    MenuList,
    MenuGroup,
    MenuItem as ChakraMenuItem,
    MenuDivider,
} from "@chakra-ui/react";

import { ReactNode } from 'react';

const MenuItem = ( props: any ) => (
    <ChakraMenuItem 
    bg='inherit'
    fontWeight={600}
    _hover={{
        bg: 'gray.100',
    }}
    {...props}
    >
    </ChakraMenuItem>
)
export function SignedInMenu ( props: any ) {    
    return (
        <MenuList
              bg='white'
              color='var(--text-primary)'
              >
                <MenuGroup
                fontWeight={'600'}
                >
                    <MenuItem>Messages</MenuItem>
                    <MenuItem>Notifications</MenuItem>
                    <MenuItem>Reservations</MenuItem>
                    <MenuItem>Wishlists</MenuItem>
                    <MenuItem>My Reviews</MenuItem>
                </MenuGroup>
                <MenuDivider mx='auto' w='90%' bg='#E0E2E6' />
                <MenuGroup
                fontWeight={'500'}
                >
                    <MenuItem fontWeight={500}>Account</MenuItem>
                    <MenuItem fontWeight={500}>Help Center</MenuItem>
                    <MenuItem fontWeight={500}>Logout</MenuItem>
                </MenuGroup>
              </MenuList>
    )
}

export function AnonymousMenu ( props: any ) {    
    return (
        <MenuList
        motionProps={{
            initial: {
                opacity: 0,
            },
            
            transition: {
                duration: '1000',
            }
        }}
        bg='white'
        color='var(--text-primary)'
        >
                
            <MenuItem fontWeight={600}>Sign Up</MenuItem>
            <MenuItem fontWeight={500}>Login</MenuItem>
            <MenuItem fontWeight={500}>Help Center</MenuItem>
        </MenuList>
    )
}