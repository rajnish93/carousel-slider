import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './styles.css';
import makeup from "./assets/img/makeup.jpg";
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
  return <React.Fragment>
    <Swiper id="main">
      {slides}
    </Swiper>
  </React.Fragment>
}
export default App;