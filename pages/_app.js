import '../styles/globals.css'
import { Navbar } from '../components'
import NextNProgress from 'nextjs-progressbar'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const showNavBar = router.pathname === '/user/[id]' ? false : true

  return (
    <>
      <NextNProgress color='#3477eb' />
      {showNavBar && <Navbar />}

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
