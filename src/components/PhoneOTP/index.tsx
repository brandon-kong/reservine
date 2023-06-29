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
    const [resendCountdown, setResendCountdown] = useState(0)

    async function handleSubmit(value: string) {

        const { error } = await supabase.auth.verifyOtp({
            phone: props.phoneNumber,
            token: value,
            type: 'sms'
        })

        if (error) {
            setError(error.message)
        }
    }

    async function resendCode() {
        if (resendCountdown > 0) return;

        const { error } = await supabase.auth.resend({
            type: 'sms',
            phone: props.phoneNumber,
        })

        setResendCountdown(30)
        
        if (error) {
            setError(error.message)
        }

        const interval = setInterval(() => {
            setResendCountdown(resendCountdown - 1)
        }, 1000)

        setTimeout(() => {
            clearInterval(interval)
        }, 30000)
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
                <PinInput onComplete={handleSubmit}  placeholder={''} focusBorderColor='primary.100' colorScheme={'gray'} size='lg' variant='outline' type='number' otp>
                    {
                        [...Array(6)].map((_, i) => (
                            <PinInputField key={i} bg={'var(--gray)'} />
                            )
                        )
                    }
                </PinInput>
            </Stack>
            {
                resendCountdown > 0 ?
                <Text>
                    Resend code in {resendCountdown}s
                </Text> : (
                <Text>
                    Didn't receive the code? <Text as='span' color='primary.100' cursor='pointer' onClick={resendCode}>Resend</Text>
                </Text>   
                )
            }
            <Text color='red.500' fontSize='sm'>{error}</Text>
            
        </Stack>
    )
}