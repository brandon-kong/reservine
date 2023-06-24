import {
    Flex,
    Heading,
    Divider,
} from "@chakra-ui/react";

import BlogCard from "../BlogCard";

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
            <BlogCard
            title='Choose the right property!'
            genre='Economy'
            />
            <BlogCard
            title='Best environment for rental'
            genre='Lifestyle'
            />
            <BlogCard
            title='Boys Hostel in Kathmandu'
            genre='Property'
            />
            <BlogCard
            title='Investment in property'
            genre='Investment'
            />
            </Flex>
        </Flex>
        
        </>
    )
}