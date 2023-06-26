import { Container } from "@chakra-ui/react";

export default function NewContainer ( props: any ) {
    return (
        <Container
        p='14'
        color={'var(--text-primary)'}
        maxW="container.xl"
         { ...props } />
    )
}