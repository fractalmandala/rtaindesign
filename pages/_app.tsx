import Link from 'next/link'
import { AppProps } from 'next/app'
import localFont from '@next/font/local'
import { NextUIProvider } from '@nextui-org/react';
import { A11y, Keyboard, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
  <NextUIProvider>
    <div className="headerkind"><Link href="/">Home</Link></div>
     <Swiper
      // install Swiper modules
      modules={[A11y, Keyboard, Mousewheel]}
      spaceBetween={0}
      slidesPerView={1}
      speed={600}
      keyboard={{
        enabled: true,
      }}
      mousewheel={true}
      direction={"vertical"}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className="genfle-r bb-g ff cc bk-white bdr-b">
          <Component {...pageProps} />
          </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="genflex-r ff cc bk-white bdr-b">
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="genflex-r ff cc bk-white bdr-b">
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="genflex-r ff cc bk-white bdr-b">
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  
  
</NextUIProvider>
  )
}
