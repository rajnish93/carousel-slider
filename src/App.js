import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './styles.css';
import makeup from "./assets/img/makeup.jpg";
import juice from "./assets/img/juice.jpg";
import moisture from "./assets/img/moisture.jpg";
import './styles.css';
function App() {
  const slides = [];
  slides.push(
    <SwiperSlide key="slide-0">
      <img
        src={makeup}
        style={{ listStyle: 'none' }}
        alt="Slide 0"
      />
    </SwiperSlide>
  )
  slides.push(
    <SwiperSlide key="slide-1">
      <img
        src={juice}
        style={{ listStyle: 'none' }}
        alt="Slide 1"
      />
    </SwiperSlide>
  )
  slides.push(
    <SwiperSlide key="slide-2">
      <img
        src={moisture}
        style={{ listStyle: 'none' }}
        alt="Slide 2"
      />
    </SwiperSlide>
  )
  return <React.Fragment>
    <Swiper id="main">
      {slides}
    </Swiper>
  </React.Fragment>
}
export default App;