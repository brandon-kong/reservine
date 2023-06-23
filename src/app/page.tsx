'use client';

import Navbar from '../components/Navbar'

import HeroFilter from '../components/HeroFilter';
import PropertyCard from '../components/PropertyCard';
import HeroImg from '@/../public/images/hero-cover-3.jpeg'

import {
  Flex,
  Image,
  Heading,
  Divider,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
    direction={'column'}
    gap='5'
    >
      <Navbar />
      <Flex
      position='relative'
      align={'flex-end'}
      justify={'center'}
      h='100vh'
      py={'4.75rem'}
      >
        <Image
        filter={'grayscale(100%)'}
        top='0'
        position='absolute'
        src={HeroImg.src}
        objectFit='cover'
        w='full'
        h='full'
        zIndex={-1}
        />
        <HeroFilter />
        
      </Flex>
      <Flex
      px='20'
      py='10'
      color='var(--text-primary)'
      direction={'column'}
      gap='10'
      >
        <Heading>
          Explore Nearby
          <Divider
          mt='5'
          mb='5'
          w='10%'
          h='.25rem'
          bg='#000'
          rounded='full'
          />
        </Heading>
        <Flex
        gap='10'
        >
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </Flex>
      </Flex>
      <Flex
      px='20'
      py='10'
      color='var(--text-primary)'
      direction={'column'}
      gap='10'
      >
        <Heading>
          Top Rated
          <Divider
          mt='5'
          mb='5'
          w='10%'
          h='.25rem'
          bg='#000'
          rounded='full'
          />
        </Heading>
        <Flex
        gap='10'
        >
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </Flex>
      </Flex>
    </Flex>
  )
}
