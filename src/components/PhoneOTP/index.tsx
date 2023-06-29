import { useState } from 'react';

import {
    Stack,
    Heading,
    Text,
    PinInput,
    PinInputField,
    Spinner,
} from '@chakra-ui/react';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import { useRouter } from 'next/navigation';

export default function PhoneOTP( props: any) {
    const supabase = createClientComponentClient()
    const router = useRouter()

    const [loading, setLoading] = useState(false)
    const [otp, setOtp] = useState('')
    const [error, setError] = useState('')
    const [resendCountdown, setResendCountdown] = useState(0)

    async function handleSubmit(value: string) {

        setLoading(true)
        const { session, error } = await supabase.auth.verifyOtp({
            phone: props.phoneNumber,
            token: value,
            type: 'sms'
        })

        if (error) {
            setLoading(false)
            setError(error.message)
        }
        else {
            router.refresh()
            console.log(session)
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
                
                <PinInput isDisabled={loading} onComplete={handleSubmit}  placeholder={''} focusBorderColor='primary.100' colorScheme={'gray'} size='lg' variant='outline' type='number' otp>
                    {
                        [...Array(6)].map((_, i) => (
                            <PinInputField key={i} bg={'var(--gray)'} />
                            )
                        )
                    }
                </PinInput>
            </Stack>
            {
                loading ? <Spinner /> :
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