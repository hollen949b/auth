'use client';

import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { useSupabase } from '../supabase-provider';

export default function Feed(){
    const { supabase } = useSupabase();

    const handleLogout = async () => {
        await supabase.auth.signOut();
    };

    return(
        <main className="h-screen w-full pb-16">
            <div className='flex justify-center h-full'>
                <div className='w-full self-center flex flex-col sm:flex-row max-w-xl sm:max-w-7xl px-4 md:px-8 gap-2 md:gap-4'>
                    <Card color='white' radius='md' className='w-full'>
                        <Card.Body>
                            <button onClick={handleLogout}>Logout</button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </main>
    )
}