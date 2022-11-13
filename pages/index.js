import Head from 'next/head'
import Image from 'next/image'
import { Hero, Main } from '../components'
import styles from '../styles/Home.module.css'
import { useUser } from '../firebase/useUser'
import { useEffect } from 'react'

export default function Home() {
  const { user, logout } = useUser();
  useEffect(() => {
    if (user) window.location.href = "/dashboard";
  }, [user])
  return (
    <>
      <Head>
        <title>Home | ConnectApp</title>
      </Head>
      <Hero heading='CONNEQT' message='Student Job Search Made Easy.' />
      <Main />
    </>
  )
}

{/* </>
      <body>
        {user ? null : <div className='text-primary text-2xl'>
          Welcome to CONNEQT! This application lets you create a digital business card from just a resume! Please sign in to begin...
        </div>}
      </body>
    </> */}
