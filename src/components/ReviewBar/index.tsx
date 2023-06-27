import {
    Box,
    Flex,
    Text,
    Progress
} from '@chakra-ui/react'

export default function ReviewBar ( props: any ) {
    return (
        <Flex>
            <Flex
            flex={'1'}

            >
                <Text
                fontWeight={'500'}
                >
                    { props.title }
                </Text>
            </Flex>
            <Flex
            flex={'1'}
            >
                <Flex
                w='full'
                alignItems='center'
                gap={'4'}
                >
                    <Progress
                    value={props.value || 75}
                    bg={'var(--gray)'}
                    size={'sm'}
                    h={'1'}
                    flex={'1'}
                    w='full'
                    rounded={'full'}
                    colorScheme={'primary'}
                    />
                    <Text>
                        { props.rating }
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    )
}