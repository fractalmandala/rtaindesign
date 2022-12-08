import Link from 'next/link'
import { AppProps } from 'next/app'
import { A11y, Keyboard, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Headerrid from '../components/headerrid'
import styles from '../components/swiperpanel.module.css'

import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Headerrid></Headerrid>
    <Swiper
      // install Swiper modules
      modules={[A11y, Keyboard, Mousewheel]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
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
        <div className={styles.swiperbox}>1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.swiperbox}>2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.swiperbox}>3</div>
      </SwiperSlide>
    </Swiper>
    </>
  )
}