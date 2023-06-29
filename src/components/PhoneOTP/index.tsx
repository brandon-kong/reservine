import { useState } from 'react';

import {
    Stack,
    Heading,
    Text,
    PinInput,
    PinInputField,
} from '@chakra-ui/react';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function PhoneOTP( props: any) {
    const supabase = createClientComponentClient()

    const [otp, setOtp] = useState('')
    const [error, setError] = useState('')

    async function handleSubmit() {

        const { error } = await supabase.auth.verifyOtp({
            phone: props.phoneNumber,
            token: otp,
            type: 'sms'
        })
    }

    function onChange(e: any) {
        setOtp(e.target.value)

        if (e.target.value.length === 6) {
            handleSubmit()
        }
    }
    return (
        <Stack
        spacing={'6'}
        >
            <Stack>
                <Heading size='md' fontWeight={'700'}>We sent you a text!</Heading>
                <Text fontSize='sm'>Please enter the 6 digit code sent to your phone number</Text>
                <Heading size='sm'>
                    {props.phoneNumber}
                </Heading>
            </Stack>
            
            <Stack
            direction={'row'}
            w='full'
            >
                <PinInput onChange={(e: any) => onChange}  placeholder={''} focusBorderColor='primary.100' colorScheme={'gray'} size='lg' variant='outline' type='number' otp>
                    {
                        [...Array(6)].map((_, i) => (
                            <PinInputField key={i} bg={'var(--gray)'} />
                            )
                        )
                    }
                </PinInput>
            </Stack>
            
        </Stack>
    )
}