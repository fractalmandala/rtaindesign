import Link from 'next/link'
import { Navigation, Pagination, Mousewheel, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Mousewheel, Pagination, A11y]}
      spaceBetween={0}
      direction={"vertical"}
      mousewheel={true}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className="genflex ff">Slide 1
        <Link href="/">Back</Link>
        </div>
        </SwiperSlide>
      <SwiperSlide><div className="genflex ff bk-black">Slide 2</div></SwiperSlide>
      <SwiperSlide><div className="genflex ff">Slide 3</div></SwiperSlide>
      <SwiperSlide><div className="genflex ff bk-black">Slide 4</div></SwiperSlide>
      ...
    </Swiper>
  );
};