import { A11y, Keyboard, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Mother from '../components/mother'
import Sidenav from '../components/sidenav'
import Genflex from '../components/genflex'
import styles from './mystyles.module.css'

import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const MySwiper = ({ preview, children }: Props) => {
  return (
<>
            <Swiper
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
            <Genflex>  </Genflex>
            </SwiperSlide>
            <SwiperSlide>
            <Genflex>  </Genflex>
            </SwiperSlide>
            <SwiperSlide>
            <Genflex> </Genflex>
            </SwiperSlide>
            <SwiperSlide>
            <Genflex> </Genflex>
            </SwiperSlide>
            
            </Swiper>
            </>
            )
            }

export default MySwiper

