import {
    Flex,
    Heading,
    Text,
    Image
} from "@chakra-ui/react";

import PrimaryButton from "../Button";

export default function InfoCard ( props: any ) {
    return (
        <Flex
        bg='var(--gray)'
        height='24.6875rem'
        borderRadius={'2xl'}
        overflow={'hidden'}
        >
            <Flex
            h='full'
            px='20'
            align={'flex-start'}
            justify={'center'}
            w='60%'
            direction={'column'}
            gap='5'
            >
            <Heading w='200px'>
                { props.header }
            </Heading>
            <Text>
                { props.subtext }
            </Text>
            <PrimaryButton
            py='5'
            px='7'
            fontSize='inherit'
            > { props.action } </PrimaryButton>
            </Flex>
            <Image
            src={ props.img }
            filter={'grayscale(100%)'}
            w='full'
            h='full'
            objectFit='cover'
            />
        </Flex>
    )
}