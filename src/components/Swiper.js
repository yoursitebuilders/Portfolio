// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, FreeMode, Scrollbar, A11y } from 'swiper/modules';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import img4 from './img4.jpg';
import img5 from './img5.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { EffectCoverflow } from 'swiper/modules';
import React from 'react';
import { useSwiper } from 'swiper/react';

function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button className='bg-red-700' onClick={() => swiper.slideNext()}>
      Slide to the next slide
    </button>
  );
}

export default () => {
  return (
    <Swiper
      className=''
      // install Swiper modules
      effect="coverflow"
      modules={[Navigation, FreeMode, Autoplay, Pagination, EffectCoverflow, Scrollbar, A11y]}
      spaceBetween={5}
      slidesPerView={3}
      slideShadows={true}
      loop={true}
      loopAdditionalSlides={1}
      speed={800}
      freeMode={true}
      // autoplay={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img className='w-[400px] h-[400px] rounded-[10px]' src={img1} />
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-[400px] h-[400px] rounded-[10px]' src={img2} />
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-[400px] h-[400px] rounded-[10px]' src={img3} />
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-[400px] h-[400px] rounded-[10px]' src={img4} />
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-[400px] h-[400px] rounded-[10px]' src={img5} />
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-[400px] h-[400px] rounded-[10px]' src={img1} />
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-[400px] h-[400px] rounded-[10px]' src={img2} />
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-[400px] h-[400px] rounded-[10px]' src={img3} />
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-[400px] h-[400px] rounded-[10px]' src={img4} />
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-[400px] h-[400px] rounded-[10px]' src={img5} />
      </SwiperSlide>
    </Swiper>
  );
};
