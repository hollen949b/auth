'use client';

import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { useSupabase } from '../supabase-provider';
import ApplicationLogo from '@/components/logo';
import LoginForm from '../login';

export default function Login(){
    const { supabase } = useSupabase();
    
    const handleSignUp = async () => {
        await supabase.auth.signUp({
            email: "bhollenbeck@webrinse.com",
            password: "sup3rs3cur3bh",
        });
    };

    return(
        <>
            <div className="bg-[url('/images/gitkit-home-bg.png')] dark:bg-[url('/images/gitkit-grad-bg-dark.jpg')] bg-cover">
                <main className="h-screen w-full pb-16">
                    <div className='flex justify-center h-full'>
                        <div className='w-full self-center flex flex-col sm:flex-row max-w-xl sm:max-w-7xl px-4 md:px-8 gap-2 md:gap-4'>
                            <div className='flex-grow flex flex-col gap-2'>
                                <div>
                                    <h1 className='text-4xl sm::text-6xl md:text-7xl font-extrabold text-white pb-4'>Get In Touch<br />Keep In Touch</h1>
                                    <p className=' text-sm  sm:text-base md:text-lg text-white'>Some content about why you should use GITKIT</p>
                                </div>
                                <div>
                                    <Button color='lime' size='base' iconRight='angleDown' label='Learn More' />
                                </div>
                            </div>
                            <Card color='white' radius='lg' className='w-full max-w-sm'>
                                <Card.Head>
                                    <div className='pb-2 pt-12'>
                                        <ApplicationLogo className="w-40 m-auto" />
                                    </div>
                                </Card.Head>
                                <Card.Body>
                                    <LoginForm />
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}