import { 
    Button as ChakraButton,
    IconButton as ChakraIconButton,
    Icon,
} from '@chakra-ui/react'
import Link from 'next/link'

export default function PrimaryButton ( props: any ) {
    return (
        <ChakraButton
        rounded='full'
        bg='var(--color-primary)'
        py='5'
        fontWeight={600}

        color={'white'}
        _hover={{ bg: 'var(--color-primary-dark)' }}
        _active={{ bg: 'var(--color-primary-dark)' }}
        {...props}
        >
            {props.children}
        </ChakraButton>
    )
}

export function Button ( props: any) {
    return (
        <ChakraButton
        rounded='full'
        bg='white'
        fontSize='sm'
        color='var(--text-primary)'
        fontWeight={600}

        _hover={{ bg: 'white' }}
        _active={{ bg: 'white' }}
        {...props}
        >
            {props.children}
        </ChakraButton>
    )
}

export function PrimaryIconButton ( props: any ) {
    return (
        <ChakraIconButton
        icon={props.icon}
        rounded='full'
        bg='var(--color-primary)'
        py='5'
        fontWeight={600}
        aria-label={props['aria-label']}

        _hover={{ bg: 'var(--color-primary)' }}
        _active={{ bg: 'var(--color-primary)' }}
        {...props}
        >
            {props.children}
        </ChakraIconButton>
    )
}

export function OutlineButton ( props: any ) {
    return (
        <ChakraButton
        rounded='full'
        bg='transparent'
        py='5'
        fontWeight={600}
        color='var(--color-primary)'

        border='1px solid var(--color-primary)'
        _hover={{ bg: 'var(--gray)' }}
        _active={{ bg: 'var(--gray)' }}
        {...props}
        >
            {props.children}
        </ChakraButton>
    )
}

export function SocialButton ( props: any ) {
    return (
        <Link
        href={ props.href}
        >
            <Icon
            as={props.icon}
            {...props}
            />
        </Link>

    )
}