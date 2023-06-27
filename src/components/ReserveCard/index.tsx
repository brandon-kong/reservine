import {
    Flex,
    Heading,
    Divider,
    Text,
    Icon,
} from '@chakra-ui/react'
import PrimaryButton from '../Button'

import { BiBuildingHouse } from 'react-icons/bi'
import Link from 'next/link'

export default function ReserveCard ( props: any ) {
    return (
        <Flex
        rounded={'lg'}
        direction={'column'}
        w='full'
        p={'8'}
        gap={'4'}
        border={'2px solid var(--gray)'}
        >
            <Flex
            >
                <Heading
                size={'md'}
                >
                    { props.title || '$ 1000 - $ 2000' }
                </Heading>
            </Flex>
            <Divider 
            bg='#E2E8F0'
            alignSelf='center'
            />
            <Flex
            direction={'column'}
            gap={'6'}
            >
                <Flex
                color={'var(--text-secondary)'}
                direction={'column'}
                gap={'2'}
                >
                    <Text>
                        Short Term: { props.shortTerm || '$1000' }
                    </Text>
                    <Text>
                        Medium Term: { props.mediumTerm || '$1500' }
                    </Text>
                    <Text>
                        Long Term: { props.longTerm || '$2000' }
                    </Text>
                </Flex>
                <PrimaryButton
                h={'3rem'}
                >
                    Reserve Now
                </PrimaryButton>
                <Flex>
                    <Flex
                    align={'center'}
                    justifyContent={'center'}
                    gap={'2'}
                    flex={'1'}
                    w='full'
                    >
                        <Icon as={BiBuildingHouse} />
                        <Text
                        as={Link}
                        fontWeight={'600'}
                        fontSize={'sm'}
                        _hover={{
                            textDecoration: 'underline'
                        }}
                        href={'/property/1234'}
                        cursor={'pointer'}
                        >
                            Property Inquiry
                        </Text>
                    </Flex>
                    <Flex
                    align={'center'}
                    justifyContent={'center'}
                    gap={'2'}
                    flex={'1'}
                    >
                        <Icon as={BiBuildingHouse} />
                        <Text
                        as={Link}
                        fontWeight={'600'}
                        fontSize={'sm'}
                        _hover={{
                            textDecoration: 'underline'
                        }}
                        href={'/property/1234'}
                        cursor={'pointer'}
                        >
                            Contact Host
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}