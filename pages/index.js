import Head from 'next/head'
import Image from 'next/image'
import { Hero, Main, Footer } from '../components'
import styles from '../styles/Home.module.css'
import { useUser } from '../firebase/useUser'
import { useEffect } from 'react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ConnectApp</title>
      </Head>
      <Hero heading='CONNEQT' message='Professional Connections Made Easy.' />
      <Main />
      <Footer />
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
