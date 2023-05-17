'use client';

import { Button } from '@/components/button';
import { useState } from 'react';
import { useSupabase } from './supabase-provider';
import { FancyInput } from '@/components/form/Input';
import Link from 'next/link';

interface IEvent {
    preventDefault: () => void,
    event:React.ChangeEvent<HTMLInputElement>
    target?:any
}

const LoginForm = () => {
    const { supabase } = useSupabase();
    const [submitting, setSubmittingState] = useState(false)
    const [errors, setErrors] = useState('');
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    async function signInWithFacebook() {
        const { data, error } = await supabase.auth.signInWithOAuth({
          provider: 'facebook',
        })
    }

    const submitLoginForm = async (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setSubmittingState(true)
        const { error } = await supabase.auth.signInWithPassword({
            email: 'example@email.com',
            password: 'example-password',
        })
        if(error){
            if (error) {
                setErrors(error.message);
              }
        }
        setSubmittingState(false)
    }

    return(
        <>
            <form onSubmit={submitLoginForm} className='w-full'>
                <h1 className="text-xl font-semibold text-gray-600 dark:text-gray-200 text-center pb-4">
                    Login
                </h1>
                { errors?.length
                    ? <h6 className='my-2 text-red-500 text-xs'>{errors}</h6>
                    : ``
                }
                <div className='flex flex-col space-y-4'>
                    <FancyInput 
                        label='Email' 
                        id="email" 
                        className="w-full rounded-md bg-gray-100 autofill:bg-gray-100" 
                        type="text" 
                        placeholder="First Name" 
                        required 
                        value={loginEmail} 
                        onChange={(event:IEvent) => setLoginEmail(event.target.value)} />

                    <FancyInput 
                        label='Password' 
                        id="password" 
                        className="w-full rounded-md bg-gray-100 autofill:bg-gray-100" 
                        type="password" 
                        placeholder="Password" 
                        required 
                        value={loginPassword} 
                        onChange={(event: IEvent) => setLoginPassword(event.target.value)} />

                    <div className='w-full space-y-1'>
                        <Link href='/password-reset' className='text-sm font-medium text-primary-600 dark:text-purple-300 hover:underline'>
                            Forgot your password?
                        </Link> 
                    
                        <Button full type='submit' color='primary' disabled={submitting} label='Login' />
                    </div>
                </div>
            </form>
            <div className='space-y-4 pb-4'>
                <h3 className='dark:text-white pt-6 text-center'>Or Login With</h3>
                <div className='w-full'>
                    <Button full color='dark' size='base' iconLeft='facebook' label='Signin With Facebook' onClick={signInWithFacebook} />
                </div>
            </div>
            <div className='text-center pb-2'>
                <Link href='/account/signup' className='text-sm font-medium text-purple-600 dark:text-purple-300 hover:underline'>
                    Create account
                </Link>
            </div>
        </>
    )
}

export default LoginForm