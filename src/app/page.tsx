'use client';

import Navbar from '../components/Navbar'

import HeroFilter from '../components/HeroFilter';
import CardDisplay from '../components/CardDisplay';
import InfoCard from '../components/InfoCard';
import BlogDisplay from '../components/BlogDisplay';
import Footer from '../components/Footer';
import HeroImg from '@/../public/images/hero-cover-3.jpeg'
import HeroImg2 from '@/../public/images/hero-cover-2.jpeg'
import HeroImg4 from '@/../public/images/hero-cover-4.jpeg'

import {
  Flex,
  Image,
  Stack,
  Heading,
  Text,
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
      
      <Stack
      px='20'
      py='10'
      color='var(--text-primary)'
      direction={'column'}
      gap='20'
      >
        <CardDisplay 
        name='Explore Nearby'
        />
        <CardDisplay
        name='Top Rated'
        />

        <InfoCard
        header='Try Hosting With Us'
        subtext='Earn extra just by renting your property...'
        action='Become a Host'
        img={HeroImg2.src}
        />
     
        <CardDisplay 
        name='Featured Properties'
        />

        <InfoCard
        header='Browse For More Properties'
        subtext='Explore properties by their categories/types...'
        action='Find A Property'
        img={HeroImg4.src}
        />
        <BlogDisplay
        name='Property Rental Guides & Tips'
        />
      </Stack>


      
      <Footer />
    </Flex>
  )
}
