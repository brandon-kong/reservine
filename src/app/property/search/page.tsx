'use client';

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import NewContainer from "@/components/Container";
import Map from "@/components/Map";

import { BiBed, BiBath, BiCar } from "react-icons/bi";
import { PiPawPrintBold } from "react-icons/pi";

import ResultQueryCard from "@/components/ResultQueryCard";

import {
    Heading,
    Flex,
    Box,
    Image,
    Text,
    Icon
} from "@chakra-ui/react";
import { OutlineButton } from "@/components/Button";

import { BiSlider } from "react-icons/bi";

export default function FindProperty () {
    return (
        <>
        <Navbar />
        <Flex>
            <NewContainer
            flex='1'
            >
                <Flex
                direction={'column'}
                gap='4'
                >
                    <Heading>
                        4 Results Found
                    </Heading>
                    <Flex
                    justify={'space-between'}
                    >
                        <OutlineButton
                        px='10'
                        >
                            Sort
                        </OutlineButton>
                        <OutlineButton
                        px='10'
                        as={Flex}
                        cursor={'pointer'}
                        gap='2'
                        >
                            <Icon as={BiSlider} />
                            Filter
                        </OutlineButton>
                    </Flex>
                    <Flex
                    w='full'
                    direction={'column'}
                    gap='8'
                    >
                      {
                        Array(4).fill(0).map((_, i)  => <ResultQueryCard key={i} />)
                      }
                    </Flex>
                </Flex>
               
                
                
            </NewContainer>
            <Box
            flex='1'
            position={'relative'}
            
            >
                <Flex
                w='full'
                h='90vh'
                position={'absolute'}
                pointerEvents={'none'}
                pb={'32'}
                

                justify={'center'}
                align={'flex-end'}
                >
                    <Flex
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
                </Flex>
                
                <Box
                w='full'
                >
                    <Map
                    minH='90vh'
                    />
                </Box>
                
            </Box>
        </Flex>
        
        <Footer />
        </>
    )
}