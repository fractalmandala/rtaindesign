import Link from 'next/link'
import { NextUIProvider } from '@nextui-org/react';
import { A11y, Keyboard, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';
import '../styles/index.css'

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
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
        <div className="genfle-r bb-g ff cc bk-white bdr-b">
        {children}
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

        </body>
    </html>
  );
}