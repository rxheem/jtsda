import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'

// color #3e588e

import HomeCarouselItem from '../../views/homeCarouselItem/homeCarouselItem'

class HomeCarousel extends Component {

  render () {
    return (
      <Carousel>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://www.theedigital.com/wp-content/uploads/2017/05/marketing-cat-memes-003.png'
          alt='hello'
        />
        <Carousel.Caption>
          <h3>Hi</h3>
          <p>Mhmmm</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
    )
  }
}

export default HomeCarousel
