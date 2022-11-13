import '../styles/globals.css'
import { Navbar } from '../components'
import NextNProgress from 'nextjs-progressbar'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const showNavBar = router.pathname === '/users/[userId]/businesscards/[resumeId]' ? false : true
  console.log("Path is", router.pathname)

  return (
    <>
      <NextNProgress color='#3477eb' />
      {showNavBar && <Navbar />}

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
