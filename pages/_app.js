import '../styles/globals.css'
import Layoult from '../components/Layoult'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    
    <Layoult>
      <Component {...pageProps} />
    </Layoult>
  )
}

export default MyApp
