import './globals.css'
import { Montserrat } from 'next/font/google'

import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { headers, cookies } from "next/headers";
import type { Database } from '@/interfaces/database';
import SupabaseProvider from './supabase-provider';

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'GITKIT',
  description: 'Link in bio',
}

export default async function RootLayout(props:any) {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  });

  const { data } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <SupabaseProvider>
        { data.session
          ? props.dash 
          : props.login
        }
        </SupabaseProvider>
      </body>
    </html>
  )
}