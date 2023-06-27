import {
    Flex,
    Box,
    Image,
    Text,
    Heading,
    Icon,
} from '@chakra-ui/react'

import { BiBed, BiBath, BiCar } from "react-icons/bi";
import { PiPawPrintBold } from "react-icons/pi";

import Link from 'next/link'


export default function MapOverlay ( props: any ) {
    return (
        <Flex
        as={Link}
        bg='white'
        rounded={'md'}
        overflow={'hidden'}
        boxShadow={'md'}
        h='fit-content'
        pointerEvents={'all'}
        transition={'all .2s ease-in-out'}
        cursor={'pointer'}
        _hover={{
            transform: 'scale(1.1)',
        }}
        zIndex={'10'}

        href={`/property/${props.id || '1234'}`}
        >
            <Image
            src='https://www.placehold.it/200x200'
            bg='white'
            roundedLeft={'md'}
            h='28'
            w='28'
            />
            <Flex
            direction={'column'}
            p='5'
            gap='1'
            >
                <Heading
                size='sm'
                >
                    1234 Main St
                </Heading>
                <Text
                fontSize='sm'
                color={'var(--text-secondary)'}
                >
                    100 Smart Street, Chicago, IL 60601
                </Text>
                <Flex
                gap='4'
                >
                    <Flex
                    align={'center'}
                    justify={'center'}
                    gap={'2'}
                    >
                        <Icon fontSize='2xl' as={BiBed} />
                        <Text
                        fontWeight={'600'}
                        >
                            3
                        </Text>
                    </Flex>
                    <Flex
                    align={'center'}
                    justify={'center'}
                    gap={'2'}
                    >
                        <Icon fontSize='2xl' as={BiBath} />
                        <Text
                        fontWeight={'600'}
                        >
                            3
                        </Text>
                    </Flex>
                    <Flex
                    align={'center'}
                    justify={'center'}
                    gap={'2'}
                    >
                        <Icon fontSize='2xl' as={BiCar} />
                        <Text
                        fontWeight={'600'}
                        >
                            2
                        </Text>
                    </Flex>
                    <Flex
                    align={'center'}
                    justify={'center'}
                    gap={'2'}
                    >
                        <Icon fontSize='2xl' as={PiPawPrintBold} />
                        <Text
                        fontWeight={'600'}
                        >
                            0
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}