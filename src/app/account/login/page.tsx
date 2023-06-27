'use client';

import React, { useState } from 'react';

import {
    Flex,
    Heading,
    Link,
    Stack,
    Text,
    Image,
    Icon,
    SlideFade,
    Fade
  } from '@chakra-ui/react';

  import { ValidateEmail } from '@/util/form/email';

import GoogleButton from '@/components/GoogleButton';
import FloatingInput from '@/components/FloatingInput';
import PrimaryButton from '@/components/Button';
import OrSeperator from '@/components/OrSeperator';

import { ArrowBackIcon } from '@chakra-ui/icons'

export default function SplitScreen() {
    const [loading, setLoading] = useState(false)

    const [emailOrPhone, setEmailOrPhone] = useState('email')
    const [emailAddress, setEmailAddress] = useState('')
    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('')
    const [identifierSet, setIdentifierSet] = useState(false)
    const [isReturningUser, setIsReturningUser] = useState(false)

    const [step, setStep] = useState(0)

    const [step0EmailValid, setStep0EmailValid] = useState(true)

    let defaultBody = {
        grant_type: "",
        email: "",
        password: "",
        scope: "",
        client_id: "",
        client_secret: "",
      };


      function submitHandler (e: any) {
        e.preventDefault()
        switch (step) {
            case 0:
                if (emailOrPhone === 'email') {
                    if (!ValidateEmail(identifier)) {
                        setStep0EmailValid(false)
                        return
                    }
                }
                setStep0EmailValid(true)
                fetchUserWithCredentials(defaultBody)
                break;
            case 1:
                alert('step 1')
                break;
        }
      }

      function fetchUserWithCredentials (body: any) {
        setLoading(true)
        setIsReturningUser(false)
        setIdentifierSet(true)
        setLoading(false)
        setStep(1)
      }

      function backstep() {
        setStep(step - 1)
      }

      function nextstep() {
        setStep(step + 1)
      }

      function toggleEmailOrPhone() {
        setEmailOrPhone((emailOrPhone === 'email' ? 'phone' : 'email'))
        setIdentifier('')
      }
   
    return (
        <>
        <Stack bg={'white'} color='var(--text-primary)' h={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack px={{ base: '8', md: '8' }} spacing={10} w={'full'} maxW={'md'}>
                    

                    <SlideFade
                    in={identifierSet}>
                        <Icon 
                        rounded='full'
                        _hover={{ bg: 'var(--gray-transparent)' }}
                        cursor={'pointer'}
                        p='2'
                        transition={'all .2s ease-in-out'}
                        onClick={() => {setIdentifierSet(false); backstep()}}
                        as={ArrowBackIcon} w={12} h={12} />
                    </SlideFade>
                    {
                        identifierSet ?
                        <></>
                        :
                        <Stack direction={'column'} textAlign={{ base: 'center', md: 'left' }}  spacing={2}>
                            <Heading fontSize={'2xl'}>Get back into the action</Heading>
                            <Text color={'gray.500'}>Learn. Invest. Host. Today.</Text>
                        </Stack>
                    }
                    
                    
                    <Stack as={'form'} onSubmit={submitHandler} direction={'column'} spacing={6}>

                        <Flex
                        direction={'column'}
                        gap={'6'}
                        >
                            
                            {
                            identifierSet ?
                            <>
                            {
                                isReturningUser === true ?
                                <><Heading size='md' fontWeight={'700'}>Welcome back, name</Heading></>
                                :
                                <><Heading size='md' fontWeight={'700'}>Create account</Heading></>
                            }
                            <Fade
                            in={true}
                            >
                              { isReturningUser === true ? (
                                
                                emailOrPhone === 'email' ?
                                <FloatingInput isDisabled={true} value={identifier} onChange={(e: any) => setIdentifier(e.target.value)} name='identifier' label='Email address' type='text' />
                                :
                                <FloatingInput isDisabled={true}  value={identifier} onChange={(e: any) => setIdentifier(e.target.value)} name='identifier' label='Phone number' type='tel' />
                                
                            ) : (
                                emailOrPhone === 'email' ?
                                <FloatingInput isDisabled={false} value={identifier} onChange={(e: any) => setIdentifier(e.target.value)} name='identifier' label='Email address' type='text' />
                                :
                                <FloatingInput isDisabled={false}  value={identifier} onChange={(e: any) => setIdentifier(e.target.value)} name='identifier' label='Phone number' type='tel' />
                            )}
                            </Fade>
                            
                            <FloatingInput onChange={(e: any) => setPassword(e.target.value)} isPassword={true} name='password' label='Password' />    
                            {
                                isReturningUser === true ?
                                <></>
                                :
                                <FloatingInput onChange={(e: any) => setPassword(e.target.value)} isPassword={true} name='password' label='Confirm password' />
                            }
                            </>
                            
                            :
                            (
                                
                                emailOrPhone === 'email' ?
                                <FloatingInput value={identifier} isError={!step0EmailValid} errorMessage={'Email is invalid'} onChange={(e: any) => setIdentifier(e.target.value)} name='identifier' label='Email address' type='text' />
                                :
                                <FloatingInput value={identifier} onChange={(e: any) => setIdentifier(e.target.value)} name='identifier' label='Phone number' type='tel' />
                                
                            )
                            
                            }
                            {
                            (identifierSet && isReturningUser) ?
                            <Link
                            w='fit-content'
                            >
                                Forgot password?
                            </Link>
                            :
                            (identifierSet) ?
                            (<Link
                            w='fit-content'
                            onClick={toggleEmailOrPhone}
                            >
                                {
                                    emailOrPhone === 'email' ?
                                    'Use phone number instead'
                                    :
                                    'Use email instead'
                                }
                            </Link>)
                            : (<Link
                                w='fit-content'
                                onClick={toggleEmailOrPhone}
                                >
                                    {
                                        emailOrPhone === 'email' ?
                                        'Use phone number instead'
                                        :
                                        'Use email instead'
                                    }
                                </Link>)
                            }
                            
                        </Flex>
                        
                        <Stack spacing={6}>
                            <PrimaryButton 
                            type='submit'
                            onClick={submitHandler}
                            h={12} isLoading={loading}>
                                Next
                            </PrimaryButton>
                            <OrSeperator />
                            <GoogleButton text='Log in with Google' />
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