import {
    Flex,
    Divider,
    Text,
} from "@chakra-ui/react";

export default function OrSeperator () {
    return (
        <Flex 
        align={'center'}
        justify={'center'}
        w='full'
        >
            <Flex
            align={'center'}
            justify={'center'}
            w='full'
            h='0.5'
            >
                <Divider
                bg='var(--gray)'
                w='full'
                h='0.5'
                >
                </Divider>
            </Flex>
            <Flex 
            align={'center'}
            justify={'center'}
            w='25%'
            maxW='xs'
            >
                <Text>or</Text>
            </Flex>
            <Flex
            align={'center'}
            justify={'center'}
            w='full'
            maxW='xs'
            >
            <Divider
                bg='var(--gray)'
                w='full'
                h='0.5'
                >
                </Divider>
            </Flex>
        </Flex>
    )
}