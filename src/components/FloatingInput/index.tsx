'use client';

type Props = {
    name: string;
    label: string;
    type: string;
    isPassword?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

import React, { useState } from 'react';
import {
    Box, 
    Icon,
    Button, InputGroup, InputRightElement, Input, FormControl, FormLabel, useColorModeValue } from "@chakra-ui/react";
import PrimaryButton, { PrimaryIconButton } from '../Button';

import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

export default function FloatingLabel ( props: Props ) {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
        <FormControl className="relative" userSelect={'none'}>
            <InputGroup>
                <Input
                autoComplete='off'
                onChange={props.onChange}
                variant={'filled'}
                bg={'var(--gray)'}
                type={props.isPassword === true ? (show ? 'text' : 'password') : props.type}
                pr={props.isPassword === true ? '3rem' : '2'}
                
                _hover={
                    {
                        bg: 'var(--gray)'
                    }
                }

                _focus={
                    {
                        borderColor: 'var(--color-primary)',
                        bg: 'white'
                    }
                }

                h={12}
                placeholder={props.label || 'Enter field'}
                _placeholder={{
                    color: 'var(--text-primary)'
                }}
                {...props}
                />
                {props.isPassword === true ? 
                <InputRightElement h={'full'} width='4rem'>
                    <Icon fontSize='2xl' as={ show ? AiFillEye : AiFillEyeInvisible } color='var(--text-primary)' onClick={handleClick} />
                </InputRightElement> : null}
            </InputGroup>
            
            
        </FormControl>
    )
}