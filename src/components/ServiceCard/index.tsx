import {
    Flex,
    Box,
    Text,

} from '@chakra-ui/react'

import { StarIcon } from '@chakra-ui/icons'

export default function ServiceCard ( props: any ) {
    return (
        <Flex
        direction={'column'}
        border={'2px solid var(--gray)'}
        rounded={'lg'}
        p={'4'}
        flex={'1'}
        cursor={'pointer'}
        transition='all .2s ease-in-out'
        _hover={{
            boxShadow: 'md'
        }}
        >
            <Text
            fontWeight={'600'}
            >
                { props.title }
            </Text>
            <Text
            color={'var(--text-secondary)'}
            >
                { props.description }
            </Text>
            <Box display='flex'
            mt={'2'}
            gap={'1'}
            alignItems='center'>
                {Array(5)
                .fill('')
                .map((_, i) => (
                    <StarIcon
                    key={i}
                    color={i < props.rating || 3 ? 'var(--color-primary)' : 'gray.300'}
                    />
                ))}
            </Box>
        </Flex>
    )
}