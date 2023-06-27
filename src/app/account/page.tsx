'use client';

import { useState } from 'react';
import NewContainer from '@/components/Container';
import NewNav from '@/components/Navbar';

import Footer from '@/components/Footer';

import {
    Heading,
    Flex,
    Avatar,
    Text,
    Badge,
    Icon,
    Divider,
    Link,
    List,
    ListItem,
    ListIcon,
    Input,
} from "@chakra-ui/react";
import PrimaryButton, { OutlineButton, SocialButton } from '@/components/Button';
import { StarIcon } from '@chakra-ui/icons';

import { MdCheckCircle, MdSettings } from 'react-icons/md';
import { AiOutlineCheck } from 'react-icons/ai';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import FloatingLabel, { TextArea } from '@/components/FloatingInput';

import { GrClose } from 'react-icons/gr';

export default function Account() {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <>
        <NewNav />
        <NewContainer
        >
            <Flex
            gap='10'
            >
                <Flex
                direction='column'
                rounded='lg'
                py='10'
                px='5'
                w='17.4375rem'
                bg='var(--gray)'
                gap='10'
                >
                    <Flex
                    direction='column'
                    gap='5'
                    align='center'
                    >
                        <Avatar size='2xl' />
                        <Link>
                            <Text
                            fontWeight={'600'}
                            >
                                Upload a photo
                            </Text>
                        </Link>
                    </Flex>
                    <Flex
                    direction='column'
                    gap='3'
                    >
                        <Heading size='sm'>
                            Identity Verification
                        </Heading>
                        
                        <Text
                        color='#9A9A9A'
                        >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </Text>
                    </Flex>
                    <Flex
                    direction='column'
                    gap='3'
                    >
                        
                        <Heading size='md'>
                            John Doe - Host
                        </Heading>
                            

                        <Badge colorScheme='green' variant='solid' w='fit-content'>
                                Verified
                        </Badge>
                        
                        <List spacing={2}>
                            <ListItem>
                                <ListIcon as={AiOutlineCheck} color='var(--color-primary)' />
                                Email address verified
                            </ListItem>
                            <ListItem>
                                <ListIcon as={AiOutlineCheck} color='var(--color-primary)' />
                                Phone number verified
                            </ListItem>
                            <ListItem>
                                <ListIcon as={AiOutlineCheck    } color='var(--color-primary)' />
                                Government ID verified
                            </ListItem>
                        </List>
                    </Flex>
                </Flex>
                <Flex
                flex='1'
                direction={'column'}
                gap='7'
                >
                    <Flex
                    direction={'column'}
                    gap='2'
                    >
                         <Heading
                         size='lg'
                         >
                            Hello, John Doe
                        </Heading>
                        <Text
                        color='#9A9A9A'
                        >
                            Joined in 2021
                        </Text>
                        <Flex
                        pt='5'
                        direction={'column'}
                        gap='7'
                        hidden={!isEditing}
                        >
                             <Flex
                            direction={'column'}
                            gap='3'
                            >
                                <Heading
                                size='md'
                                >
                                    About
                                </Heading>
                               <TextArea
                               h='8rem'
                               resize='none'
                               />

                            </Flex>
                            <Flex
                            direction={'column'}
                            gap='3'
                            >
                                <Heading
                                size='md'
                                >
                                    Location
                                </Heading>
                               <TextArea
                               h='.7rem'
                               p='none'
                               resize='none'
                               />

                            </Flex>
                            <Flex
                            direction={'column'}
                            gap='3'
                            >
                                <Heading
                                size='md'
                                >
                                    Work
                                </Heading>
                               <TextArea
                               h='.7rem'
                               p='none'
                               resize='none'
                               />

                            </Flex>
                            <Flex
                            justify={'space-between'}
                            >
                                <Text
                                fontSize={'sm'}
                                color='#9A9A9A'
                                >
                                    All the information you provide will be visible to the public.
                                </Text>
                                <Flex
                                gap='4'
                                >
                                    <OutlineButton
                                    border='none'
                                    w='9.875rem'
                                    h='3rem'
                                    onClick={() => setIsEditing(false)}
                                    display='flex'
                                    gap='2'
                                    align='center'
                                    justify='center'
                                    >
                                        <Icon fontSize='lg' as={GrClose} />
                                        Cancel
                                    </OutlineButton>
                                    <PrimaryButton
                                    w='9.875rem'
                                    h='3rem'
                                    onClick={() => setIsEditing(false)}
                                    >
                                        Save
                                    </PrimaryButton>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex
                        pt='5'
                        direction={'column'}
                        gap='7'
                        hidden={isEditing}
                        >
                        <OutlineButton
                        w='9.875rem'
                        onClick={() => setIsEditing(true)}
                        >
                            Edit Profile
                        </OutlineButton>
                        <Flex
                        direction={'column'}
                        gap='4'
                        >
                            <Flex
                            direction={'column'}
                            gap='2'
                            >
                                <Heading
                                size='md'
                                >
                                    About
                                </Heading>
                                <Text
                                color='#9A9A9A'
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Text>
                            </Flex>
                            <Flex
                            direction={'column'}
                            gap='2'
                            >
                                <Heading
                                size='md'
                                >
                                    Location
                                </Heading>
                                <Text
                                color='#9A9A9A'
                                >
                                    Greater Los Angeles Area, California, United States
                                </Text>
                            </Flex>
                            <Flex
                            direction={'column'}
                            gap='2'
                            >
                                <Heading
                                size='md'
                                >
                                    Work
                                </Heading>
                                <Text
                                color='#9A9A9A'
                                >
                                    Software Engineer at Google
                                </Text>
                            </Flex>
                            <Flex
                            direction={'row'}
                            gap='2'
                            >
                                <SocialButton href='https://www.linkedin.com/in/john-doe-123456789/' icon={FaLinkedin} fontSize='2xl' color='var(--color-primary)' />
                                <SocialButton href='https://www.instagram.com/zuck' icon={FaInstagram} fontSize='2xl' color='var(--color-primary)' />
                            </Flex>
                        </Flex>
                    <Flex
                    fontSize='md'
                    align={'center'}
                        gap='5'
                    >
                            <Icon as={StarIcon} color='var(--color-primary)' />
                            <Text
                            fontWeight={'700'}
                            >
                                0 Reviews
                            </Text>
                    </Flex>
                    <Divider 
                    bg='#E0E2E6'
                    />
                    <Link>
                        <Text
                        fontWeight={'600'}
                        textDecoration={'underline'}
                        >
                            Reviewed by you (0)
                        </Text>
                    </Link>
                </Flex>
                </Flex>
                    
                </Flex>
                    
            </Flex>
        </NewContainer>
        <Footer />
        </>
    )
}