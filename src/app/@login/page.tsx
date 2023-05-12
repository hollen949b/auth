'use client';

import { Auth } from '@supabase/auth-ui-react'
import { supabase } from '@/lib/supabaseClient';

export default function Login(){
    return(
        <>
            <main className="h-screen w-full pb-16">
                <div className='flex justify-center h-full'>
                    <div className='w-full self-center flex flex-col sm:flex-row max-w-xl sm:max-w-7xl px-4 md:px-8 gap-2 md:gap-4'>
                        <Auth supabaseClient={supabase} providers={['facebook']} />
                    </div>
                </div>
            </main>
        </>
    )
}
