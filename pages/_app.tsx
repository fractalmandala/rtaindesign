import { AppProps } from 'next/app'
import '../styles/index.css'
import localFont from '@next/font/local'
import '../styles/globals.css'

const inter = localFont ({ src: '../public/assets/fonts/Inter_Tight/InterTight-VariableFont_wght.ttf'})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  <main className={inter.className}>
  <Component {...pageProps} />
  </main>
</>
  )
}
