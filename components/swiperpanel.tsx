import { A11y, Keyboard, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Genflex from '../components/genflex'
import styles from './swiperpanel.module.css'

import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';
import './swiperpanel.module.css'

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
           <Genflex>
            {children}
             </Genflex>
            </SwiperSlide>
            <SwiperSlide>
            <Genflex>2
              
            </Genflex>

          
            </SwiperSlide>
            <SwiperSlide>
            <Genflex> 

      3
            </Genflex>
            </SwiperSlide>
            <SwiperSlide>
            <Genflex>4</Genflex>
            </SwiperSlide>
            
            </Swiper>
            </>
            )
            }

export default MySwiper

