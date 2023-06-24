import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar as ChakraAvatar,
  HStack,
  Link,
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

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Simple() {

    const loggedIn = false;
  return (
    <>
        
        <Flex
        bg={'var(--gray)'}
        position={'absolute'}
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
                    <h1>Find a Property</h1>
                    <h1>Share Stories</h1>
                    <h1>Rental Guides</h1>
                    <h1>Reviews</h1>
                    <PrimaryButton
                    py='5'
                    px='7'
                    fontSize='inherit'
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
                    loggedIn ? <SignedInMenu /> : <AnonymousMenu />
              }
            </Menu>
        </Flex>

        
    </>
  );
}