import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './styles.css';
import makeup from "./assets/img/makeup.jpg";
import juice from "./assets/img/juice.jpg";
import moisture from "./assets/img/moisture.jpg";
function App() {
  const slides = [];
  slides.push(
    <SwiperSlide key="slide-0" tag="li">
      <img
        src={makeup}
        style={{ listStyle: 'none' }}
        alt="Slide 0"
      />
    </SwiperSlide>
  )
  slides.push(
    <SwiperSlide key="slide-1" tag="li">
      <img
        src={juice}
        style={{ listStyle: 'none' }}
        alt="Slide 1"
      />
    </SwiperSlide>
  )
  slides.push(
    <SwiperSlide key="slide-2" tag="li">
      <img
        src={moisture}
        style={{ listStyle: 'none' }}
        alt="Slide 2"
      />
    </SwiperSlide>
  )
  return <React.Fragment>
    <Swiper id="main" tag="section"
      wrapperTag="ul">
      {slides}
    </Swiper>
  </React.Fragment>
}
export default App;