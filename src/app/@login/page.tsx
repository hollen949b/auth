'use client';

import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { Button } from '@/components/button';
import { Card } from '@/components/card';
// import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { useState } from 'react';
import { useSupabase } from '../supabase-provider';
import { FancyInput } from '@/components/form/Input'; 
import Link from 'next/link';

interface IEvent {
    preventDefault: () => void,
    event:React.ChangeEvent<HTMLInputElement>
    target?:any
}

export default function Login(){
    // const [supabase] = useState(() => createBrowserSupabaseClient())
    const { supabase } = useSupabase();
    const [submitting, setSubmittingState] = useState(false)
    const [errors, setErrors] = useState('');
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    

    const handleSignUp = async () => {
        await supabase.auth.signUp({
            email: "bhollenbeck@webrinse.com",
            password: "sup3rs3cur3bh",
        });
    };

    const handleLogin = async () => {
        // email: "bhollenbeck@webrinse.com",
        // password: "sup3rs3cur3bh",
        const { data, error } = await supabase.auth.signInWithPassword({
            email: 'example@email.com',
            password: 'example-password',
        })
        console.log(error)
        if(error){
            if (error) {
                setErrors(error.message);
              }
        }
    };

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
            <div className="bg-[url('/images/gitkit-home-bg.png')] bg-cover">
                <main className="h-screen w-full pb-16">
                    <div className='flex justify-center h-full'>
                        <div className='w-full self-center flex flex-col sm:flex-row max-w-xl sm:max-w-7xl px-4 md:px-8 gap-2 md:gap-4'>
                            <div className='flex-grow flex flex-col gap-2 w-full'>
                                <div>
                                <h1 className='text-4xl sm::text-6xl md:text-7xl font-extrabold text-white pb-4'>Some header here</h1>
                                <p className=' text-sm  sm:text-base md:text-lg text-white'>Some content here</p>
                                </div>
                                <div>
                                <Button color='lime' size='base' iconRight='angleDown' label='Learn More' />
                                </div>
                            </div>
                            <Card color='white' radius='lg' className='w-full'>
                                <Card.Head>
                                    <div className='pb-8 pt-16'>
                                        Logo Here
                                    </div>
                                </Card.Head>
                                <Card.Body>
                                    <Button color='lime' size='base' iconRight='angleDown' label='Signin With Facebook' onClick={signInWithFacebook} />
                                    <form onSubmit={submitLoginForm} className='w-full'>
                                        <h1 className="mb-4 text-xl font-semibold text-gray-600 dark:text-gray-200">
                                            Login
                                        </h1>
                                        { errors?.length
                                            ? <h6 className='mb-4 text-red-500 text-xs'>{errors}</h6>
                                            : ``
                                        }
                                        <div className='flex flex-col space-y-2'>
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
                                        
                                            <Button type='submit' color='primary' disabled={submitting} label='Login' />

                                            <div className='py-4'>
                                                <hr />
                                            </div>

                                            <div>
                                                <Link href='/password-reset' className='text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline'>
                                                    Forgot your password?
                                                </Link> | <Link href='/account/signup' className='text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline'>
                                                    Create account
                                                </Link>
                                            </div>
                                        </div>
                                    </form>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}