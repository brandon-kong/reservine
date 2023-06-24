import { Button } from "../Button"

import {
    Flex,
    Icon,
    Avatar as ChakraAvatar,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

export default function Avatar() {
    return (
        <Button
        display={'flex'}
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
        </Button>
    )
}