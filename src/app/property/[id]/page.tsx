'use client';

import NewContainer from "@/components/Container"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useRouter } from "next/navigation";

import HeroImg from "@/../public/images/hero-cover.jpeg";

import {
    Text,
    Grid,
    GridItem,
    Image,
    Divider,
    Heading,
    Flex,
} from "@chakra-ui/react";

type Params = {
    params: {
        id: string
    }
}

function BetterGridItem ({ children, ...props }: any) {
    return (
        <GridItem
        bg='var(--color-secondary)'
        display={'inline-block'}
        rounded='lg'
        {...props}
        overflow={'hidden'}
        cursor={'pointer'}
        >
            <Image
            src={HeroImg.src}
            alt='Hero Image'
            objectFit='cover'
            w='full'
            h='full'
            transition='all .2s ease-in-out'
            rounded={'lg'}

            _hover={{
                filter: 'brightness(.8)',
            }}
            >

            </Image>
            {children}
        </GridItem>
    )
}

export default function PropertyDashboard ({ params }: Params) {
    const router = useRouter();

    return (
        <>
            <Navbar />
            <NewContainer
            display='flex'
            flexDir='column'
            gap={'14'}
            >
               

               <Grid templateColumns='2fr 1fr 1fr'  gap={4}
               h='23.75rem'
               >
                    <BetterGridItem 
                    rowSpan={2}
                    />
                    <BetterGridItem />
                    <BetterGridItem />
                    <BetterGridItem />
                    <BetterGridItem />
                </Grid>
                <Flex>
                    <Heading
                    fontSize='2xl'
                    >
                        Well Furnished Apartment
                    </Heading>
                </Flex>
            </NewContainer>
            <Footer />
        </>
    )
}