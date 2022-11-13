import '../styles/globals.css'
import { Navbar } from '../components'
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return <>
    <NextNProgress color='#3477eb' />
    <Navbar />
    <Component {...pageProps} />
  </>
}

export default MyApp
