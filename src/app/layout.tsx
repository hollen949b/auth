'use client';

// import UserLoggedIn from '@/lib/loggedin'
import './globals.css'
import { Montserrat } from 'next/font/google'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { useState } from 'react';

const montserrat = Montserrat({ subsets: ['latin'] })

// export const metadata = {
//   title: 'GITKIT',
//   description: 'Link in bio',
// }

export default async function RootLayout(props:any) {
  // const showLogin = UserLoggedIn()
  // console.log(UserLoggedI)

  const [supabase] = useState(() => createBrowserSupabaseClient())
  
  const {data:user} = await supabase.auth.getUser()

  console.log(user.user?.aud)

  const logOut = () => {
    supabase.auth.signOut();
  }

  const showLogin = true
  return (
    <html lang="en">
      <body className={montserrat.className}>
        
        { user.user?.aud
          ? (
            <>
              <button onClick={logOut}>Logout</button>
              {props.feed}
            </>
            ) 
          : props.login
        }
      </body>
    </html>
  )
}