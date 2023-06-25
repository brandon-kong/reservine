'use client';

import React, { useState } from 'react';

import {
    Checkbox,
    Flex,
    Heading,
    LightMode,
    Link,
    Stack,
    Text,
    useColorModeValue,
    Image
  } from '@chakra-ui/react';


import GoogleButton from '@/components/GoogleButton';
import FloatingInput from '@/components/FloatingInput';
import PrimaryButton from '@/components/Button';
import OrSeperator from '@/components/OrSeperator';

export default function SplitScreen() {
    const [loading, setLoading] = useState(false)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')

    let defaultBody = {
        grant_type: "",
        email: "",
        password: "",
        scope: "",
        client_id: "",
        client_secret: "",
      };

   
    return (
        <>
        <Stack bg={'white'} color='var(--text-primary)' minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack px={{ base: '8', md: '8' }} spacing={10} w={'full'} maxW={'md'}>
                
                    <Stack direction={'column'} textAlign={{ base: 'center', md: 'left' }}  spacing={2}>
                        <Heading fontSize={'2xl'}>Welcome back! Sign in</Heading>
                        <Text color={'gray.500'}>Get back into the action</Text>
                    </Stack>
                    
                    <Stack as={'form'} direction={'column'} spacing={6}>

                        <Flex
                        gap='6'
                        >
                        <FloatingInput onChange={(e: any) => setFirstName(e.target.value)} name='firstName' label='First name' type='text' />
                        <FloatingInput onChange={(e: any) => setLastName(e.target.value)} name='lastname' label='Last name' />
                        </Flex>
                        <FloatingInput onChange={(e: any) => setEmailAddress(e.target.value)} name='email' label='Email address' type='text' />
                        <FloatingInput onChange={(e: any) => setPassword(e.target.value)} type='password' name='password' label='Password' />
                        <Stack spacing={6}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox
                                >
                                    Remember me
                                </Checkbox>
                                <Link color={'var(--text-primary)'}>Forgot password?</Link>
                            </Stack>
                            <PrimaryButton h={12} type={'submit'} isLoading={loading}>
                                Sign in
                            </PrimaryButton>
                            <OrSeperator />
                            <GoogleButton text='Log in with Google' />
                            <Text textAlign={'center'} fontSize={'sm'}>
                                Already have an account?{' '}
                                <Link href='/login' color={'var(--text-primary)'} fontWeight={'bold'}>
                                    Log in
                                </Link>
                            </Text>
                        </Stack>
                    </Stack>

                </Stack>
            </Flex>
            <Flex flex={1} display={{ base: 'none', md: 'block' }}>
            <Image
            height={'full'}
            objectFit={'cover'}
            userSelect={'none'}
            draggable={false}
            filter={'grayscale(100%)'}
            alt={'Login Image'}
            src={
            '/images/hero-cover.jpeg'
            }
            />
            </Flex>
        </Stack>
        </>
    );
  }