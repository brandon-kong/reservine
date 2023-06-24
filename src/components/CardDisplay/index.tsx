import {
    Flex,
    Heading,
    Divider,
} from "@chakra-ui/react";

import PropertyCard from "../PropertyCard";

export default function CardDisplay ( props: any ) {
    return (
        <>
        <Flex
        direction={'column'}
        gap='10'
        >
            <Heading>
            { props.name }
            <Divider
            mt='5'
            mb='5'
            w='10%'
            h='.25rem'
            bg='#000'
            rounded='full'
            />
            </Heading>
            <Flex
            gap='10'
            >
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            </Flex>
        </Flex>
        
        </>
    )
}