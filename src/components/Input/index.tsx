import {
    Input,
} from '@chakra-ui/react'

export default function InputField ( props: any ) {
    return (
        <>
        <Input
        bg='white'
        color='var(--text-primary)'
        placeholder={ props.placeholder }
        border='1px solid #E0E2E6'
        _placeholder={{
            color: 'var(--text-primary)',
        }}
        />
        </>
    )
}