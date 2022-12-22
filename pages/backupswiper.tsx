import { A11y, Keyboard, Pagination, Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from '../components/swiperpanel.module.css'
import 'swiper/css'
import 'swiper/css/keyboard'
import 'swiper/css/mousewheel'
import 'swiper/css/pagination'

export default function Story() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, called) {
      return '<span class="' + called + '">' + (index + 1) + "</span>";
    },
  }
  return (
    <div className={styles.swiperbigbox}>
      <Swiper
            modules={[A11y, Keyboard, Pagination, Mousewheel]}
            spaceBetween={0}
            slidesPerView={1}
            speed={600}
            keyboard={{
            enabled: true,
            }}
            mousewheel={true}
            direction={"horizontal"}
            pagination={pagination}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
            <SwiperSlide className={styles.theslide}>
              <div className={styles.swiperboxtiny}>a</div>
            </SwiperSlide>
            <SwiperSlide className={styles.theslide}>
              <div className={styles.swiperboxtiny}>v</div>
            </SwiperSlide>
            <SwiperSlide className={styles.theslide}>
              <div className={styles.swiperboxtiny}>v</div>
            </SwiperSlide>
            </Swiper>
    </div>
  )
}