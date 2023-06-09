import { Container } from "@chakra-ui/react";

export default function NewContainer ( props: any ) {
    return (
        <Container
        py='20'
        px='10'
        color={'var(--text-primary)'}
        maxW="container.xl"
         { ...props } />
    )
}