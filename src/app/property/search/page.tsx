'use client';

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import NewContainer from "@/components/Container";
import Map from "@/components/Map";

import { BiBed, BiBath, BiCar } from "react-icons/bi";
import { PiPawPrintBold } from "react-icons/pi";

import ResultQueryCard from "@/components/ResultQueryCard";

import StickyBox from "react-sticky-box";

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
import MapOverlay from "@/components/MapOverlay";

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
            w='full'
            
            >

                <StickyBox
                style={{
                    zIndex: 10
                }}
                >
                <Flex
                w='full'
                p={'7'}
                pointerEvents={'none'}
                pb={'32'}
                position={'absolute'}
                

                justify={'flex-end'}
                align={'flex-end'}
                >

                    <MapOverlay />
                    
                    
                </Flex>
                </StickyBox>
                <StickyBox>

                
                    <Box
                    top={'0'}
                    w='full'
                    zIndex={'-1'}
                    >
                        <Map
                        minH='90vh'
                        />
                    </Box>
                </StickyBox>
                
                
            </Box>
        </Flex>
        
        <Footer />
        </>
    )
}