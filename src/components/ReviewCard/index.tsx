import { 
    Flex,
    Text,
    Avatar
} from "@chakra-ui/react";

import { StarIcon } from '@chakra-ui/icons'

export default function ReviewCard ( props: any ) {
    return (
        <Flex
        direction={'column'}
        gap={'4'}
        >
            <Flex
            align={'center'}
            gap={'5'}
            >
                <Avatar
                size={'lg'}
                name={ props.name || 'John Doe' }
                />
                <Flex
                direction={'column'}
                gap={'2'}
                >
                    <Flex
                    gap={'1'}
                    >
                        {
                        Array(5)
                            .fill('')
                            .map((_, i) => (
                                <StarIcon
                                key={i}
                                fontSize={'lg'}
                                color={i < props.rating ? 'var(--color-primary)' : 'gray.300'}
                                />
                            ))
                        }
                    </Flex>
                   
                   <Flex
                   direction={'column'}
                   >
                        <Text
                        fontWeight={'600'}
                        >
                            { props.name || 'John Doe' }
                        </Text>
                        <Text
                        color={'var(--text-secondary)'}
                        >
                            { props.date || 'Mar 12, 2022' }
                        </Text>
                   </Flex>
                    
                </Flex>
            </Flex>
            <Text
            color={'var(--text-secondary)'}
            >
                { props.review || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet.' }
            </Text>
        </Flex>
    )
}