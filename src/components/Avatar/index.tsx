import { Button } from "../Button"
import { useRef } from "react";

import {
    Flex,
    Icon,
    Avatar as ChakraAvatar,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useDisclosure,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

export default function Avatar() {
    const initialRef = useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Flex>
        <Menu
        >
            <MenuButton as={Button}
            alignItems={'center'}
            justifyContent={'center'}
            w='6.125rem'
            >
                <Flex
                w='full'
                align={'center'}
                justify={'space-between'}
                >
                    <Icon as={HamburgerIcon} fontSize='xl'/>
                    <ChakraAvatar size='sm'/>
                </Flex>
            </MenuButton>

            <MenuList bg='white'
            >
                <MenuItem bg='white'>Download</MenuItem>
                <MenuItem bg='white'>Create a Copy</MenuItem>
            </MenuList>
        </Menu>
            
        </Flex>
        
    )
}