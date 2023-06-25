'use client';

import { FcGoogle } from 'react-icons/fc';
import { Button, Box, Center, Flex, Text, Icon, useColorModeValue } from '@chakra-ui/react';

type Props = {
    text?: string;
}

export default function GoogleButton( props: Props ) {
    return (
        <Button 
            onClick={() => {}}
            _hover={{ bg: 'var(--gray-transparent)' }}
            _active={{ bg: 'var(--gray)' }}
            h={12} fontWeight={'normal'} variant={'outline'} w='full'
            borderColor={'var(--color-primary)'}
            rounded='full'
        >
            <Flex w='full' justify='center' align='center' gap='2' px='8' py='3' rounded={'full'} >
                <Center>
                <Icon as={FcGoogle} w={8} h={8} />
                </Center>
                <Text color='var(--text-primary)'>{ props.text || 'Log in with Google' }</Text>
            </Flex>
        </Button>
    );
}