import Head from 'next/head'
import Image from 'next/image'
import { NavBar } from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ConnectApp</title>
      </Head>
      <body>
        <NavBar />
      </body>
    </>

  )
}
