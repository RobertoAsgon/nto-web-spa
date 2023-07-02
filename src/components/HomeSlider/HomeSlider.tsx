import React from 'react'

import { HomeSliderContainer } from './styles'
import Carousel from 'better-react-carousel'

const HomeSlider: React.FC = () => {
  return (
    <HomeSliderContainer>
      <Carousel gap={0} autoplay={2000} className="CarouselHome" loop>
        <Carousel.Item>
          <img width="100%" src="/assets/home-slider/1.png" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="/assets/home-slider/2.png" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="/assets/home-slider/3.png" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="/assets/home-slider/4.png" />
        </Carousel.Item>
      </Carousel>
    </HomeSliderContainer>
  )
}

export default HomeSlider
