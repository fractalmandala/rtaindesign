import { AppProps } from 'next/app'

import '../styles/newstyles.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return ( <Component {...pageProps} /> )}
