'use client';

import NewNav from '@/components/NewNav';
import {
    Flex,
    Image,
    Heading,
    Text,
} from '@chakra-ui/react';

import HeroImg from '@/../public/images/hero-cover-3.jpeg';
import PrimaryButton from '@/components/Button';
import NewContainer from '@/components/Container';
import BlogDisplay from '@/components/BlogDisplay';
import Footer from '@/components/Footer';

export default function HostPage () {
    return (
        <>
        <NewNav />
        <Flex
        h='70vh'
        w='full'
        position='relative'
        bg='var(--gray)'
        align={'flex-end'}
        p='20'
        
        >
            <Flex
            direction={'column'}
            gap='5'
            w='50%'

            >
                <Heading
                color={'var(--text-primary)'}
                >
                    Host your next event with us
                </Heading>
                <Text
                color={'var(--text-secondary)'}
                >
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.
                </Text>
                <PrimaryButton
                w='13rem'
                >
                    Let's get started
                </PrimaryButton>
            </Flex>
        </Flex>
        <NewContainer
        gap='20'
        display='flex'
        flexDirection='column'        
        >
            <Flex
            gap='12'
            >
                <Flex
                direction='column'
                rounded='lg'
                py='10'
                px='5'
                w='17.4375rem'
                bg='var(--gray)'
                flex='3'
                h='24rem'
                >
                </Flex>
                <Flex
                flex='4'
                direction='column'
                gap='8'
                >
                    <Heading>
                        Some Title Here
                    </Heading>
                    <Flex
                    color={'var(--text-secondary)'}
                    gap='5'
                    direction='column'
                    >
                        <Text>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui.
                        </Text>
                        <Text>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui.
                        </Text>
                        <Text>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui.
                        </Text>
                    </Flex>
                </Flex>
                                                        
            </Flex>
            <BlogDisplay 
            name={'Hosting Tips & Guides'}
            />
        </NewContainer>
        <Footer />
        </>
    )
}