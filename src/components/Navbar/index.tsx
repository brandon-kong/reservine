import {
    Flex,
    Heading,
} from "@chakra-ui/react";

import Avatar from "../Avatar";
import PrimaryButton from "../Button";

export default function Navbar() {
    return (
        <Flex
        top='0'
        position={'absolute'}
        bg={'var(--gray)'}
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
            <Avatar />
        </Flex>
    )
}