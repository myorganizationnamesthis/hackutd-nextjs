import Head from 'next/head'
import Image from 'next/image'
import { Hero, NavBar } from '../components'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ConnectApp</title>
      </Head>
      <NavBar />
      <Hero heading='CONNEQT Card Services' message='Job Search Made Easy.' />
  </>
  )
}
