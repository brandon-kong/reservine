import {
    Flex,
    Text,
    Divider,
    Box,
} from '@chakra-ui/react'

import { PrimaryIconButton } from '../Button'

import { SearchIcon } from '@chakra-ui/icons'

const FilterTypes = [
    {
        id: 1,
        name: 'Location',
        subtext: 'Where are you going?',
    },
    {
        id: 2,
        name: 'Check in',
        subtext: 'Add dates',
    },
    {
        id: 3,
        name: 'Check out',
        subtext: 'Add dates',
    },
    {
        id: 4,
        name: 'Guests',
        subtext: 'Add guests',
    },
]

export default function HeroFilter () {
    return (
        <Flex
            gap='5'
            direction={'column'}
            align={'flex-start'}
            justify={'center'}
            w='55%'
            >
                <Text
                w='fit-content'
                textAlign={'left'}
                fontSize='6rem'
                fontWeight={700}
                color={'var(--text-primary)'}
                ml='10'
                px='5'
                bg='rgb(255,255,255,0.8)'
                >
                    FIND
                </Text>
                <Flex
                rounded='full'
                bg='white'
                w='fit-content'
                h='4rem'
                justify={'flex-end'}
                p='2'
                pl='10'
                align={'center'}
                color={'var(--text-primary)'}
                fontWeight={600}
                gap='5'
                >
                    <Flex
                    gap='10'
                    align='center'
                    justify='center'
                    >
                    {FilterTypes.map((filter, index) => (
                        <Box
                        w='full'
                        key={filter.id}
                        >
                        <Flex
                        
                        w='full'
                        direction='column'
                        >
                            <Text
                            textAlign={'left'}
                            fontSize='sm'
                            >
                                {filter.name}
                            </Text>
                            <Text
                            fontSize='sm'
                            color={'var(--text-secondary)'}
                            >
                                {filter.subtext}
                            </Text>
                        </Flex>
                        {
                            index !== FilterTypes.length - 1 &&
                            <Divider
                            bg='#ddd'
                            orientation='vertical'
                            h='2rem'
                            w='0.0625rem'

                            />

                        }
                        </Box>
                        
                    ))}
                    
                        <PrimaryIconButton
                        icon={<SearchIcon />}
                        aria-label='Search'
                        h='3.2rem'
                        w='3.2rem'
                        />
                    </Flex>
                    
                </Flex>
            </Flex>       
    )
}