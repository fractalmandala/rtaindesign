import Link from 'next/link'
import { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';
import { A11y, Keyboard, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Sidenav from '../components/sidenav'
import Mother from '../components/mother'
import Header from '../components/header'

import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';
import '../styles/newstyles.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
  <NextUIProvider>
   <Mother>
    <Header></Header>
    <Sidenav> </Sidenav>
      <Component {...pageProps} />
      </Mother>
</NextUIProvider>
  )
}
