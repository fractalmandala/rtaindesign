import { AppProps } from 'next/app'
import localFont from '@next/font/local'
import { NextUIProvider } from '@nextui-org/react';
import { A11y, Keyboard, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';
import '../styles/index.css'

const inter = localFont ({ src: '../public/assets/fonts/Inter_Tight/InterTight-VariableFont_wght.ttf'})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
  <NextUIProvider>
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
        <div className="genflex bb-g ff cc bk-black disp-row">
          <div className="genflex w99 h100">
    <Component {...pageProps} />
    </div>
    <div className="genflex w1 h100 oonk gr-green"></div>
    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="genflex ff cc bk-black disp-row">
      <div className="genflex w99 00a6fb h100"></div>
      <div className="genflex w1 h100 oonk bk-yell"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="genflex ff cc bk-black disp-row">
      <div className="genflex w99 00a6fb h100"></div>
      <div className="genflex w1 h100 oonk bk-blue"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="genflex ff cc bk-black disp-row">
      <div className="genflex w99 00a6fb h100"></div>
      <div className="genflex w1 h100 oonk bk-red"></div>
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  
  
</NextUIProvider>
  )
}
