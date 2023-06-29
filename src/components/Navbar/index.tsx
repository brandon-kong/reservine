import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar as ChakraAvatar,
  HStack,
  Link as ChakraLink,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Heading,
  Stack,
  MenuGroup,
  Collapse,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import Avatar from '../Avatar';

import PrimaryButton from '../Button';

const Links = ['Dashboard', 'Projects', 'Team'];

import { SignedInMenu, AnonymousMenu } from '../Menu/MenuList';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useState } from 'react';

export default function Navbar() {

  const router = useRouter()
    const [loggedIn, setLoggedIn] = useState(false)

    const supabase = createClientComponentClient()

    async function handleLogout() {
      alert('logging out')
        await supabase.auth.signOut()
        router.refresh()
    }

    supabase.auth.onAuthStateChange((event, session) => {
        console.log(event, session)
        if (event === 'SIGNED_IN') {
          setLoggedIn(true)
        }
        else {
          setLoggedIn(false)
        }
    })

    const session = supabase.auth.getSession()
    session.then((res) => {
      console.log(res)
      if (res.data.session) {
        setLoggedIn(true)
      }
      else {
        setLoggedIn(false)
      }
    })
  return (
    <>
        
        <Flex
        bg={'var(--gray)'}
        position={'relative'}
        backdropFilter={'blur(20px)'}
        w='full'
        h='59px'
        alignItems='center'
        justifyContent='center'
        gap='5'
        fontSize='sm'
        color='var(--text-primary)'
        zIndex={1000}
        >
            <Flex
            gap='32'
            >
                <Heading fontWeight={'800'} fontFamily={'inherit'}>LOGO</Heading>
                <Flex
                align={'center'}
                justify={'center'}
                gap='10'
                fontWeight={'600'}
                >
                    <ChakraLink as={Link} href='/property/search'>
                      Find a Property
                    </ChakraLink>
                    <ChakraLink as={Link} href='/find'>
                      Share Stories
                    </ChakraLink>
                    <ChakraLink as={Link} href='/find'>
                      Rental Guides
                    </ChakraLink>
                    <ChakraLink as={Link} href='/find'>
                      Reviews
                    </ChakraLink>
                    <PrimaryButton
                    as={Link}
                    py='5'
                    px='7'
                    fontSize='inherit'
                    href='/host'
                    >Become a Host</PrimaryButton>
                </Flex>
                
            </Flex>
            <Menu>
              <MenuButton
                as={Flex}
                rounded={'full'}
                cursor={'pointer'}
                minW={0}>
                <Avatar/>
              </MenuButton>
              {
                    loggedIn ? <SignedInMenu logout={handleLogout} /> : <AnonymousMenu />
              }
            </Menu>
        </Flex>

        
    </>
  );
}