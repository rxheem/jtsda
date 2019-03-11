import React from 'react'
import { Carousel } from 'react-bootstrap'

const HomeCarouselItem = (props) => {
  return (
    <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.imageSource}
      alt={props.alt}
    />
    <Carousel.Caption>
      <h3>{props.captionLabel}</h3>
      <p>{props.captionText}</p>
    </Carousel.Caption>
  </Carousel.Item>
  )
}

export default HomeCarouselItem
