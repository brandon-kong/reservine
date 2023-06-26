'use client';

import NewContainer from '@/components/Container';
import NewNav from '@/components/NewNav';

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
} from "@chakra-ui/react";
import { OutlineButton } from '@/components/Button';
import { StarIcon } from '@chakra-ui/icons';

import { MdCheckCircle, MdSettings } from 'react-icons/md';
import { AiOutlineCheck } from 'react-icons/ai';

export default function Account() {
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
                    </Flex>
                    <OutlineButton
                    w='9.875rem'
                    >
                        Edit Profile
                    </OutlineButton>
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
                            Reviewed by you
                        </Text>
                   </Link>
                </Flex>
            </Flex>
        </NewContainer>
        <Footer />
        </>
    )
}