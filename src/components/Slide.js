import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import '../App.css';

export default function Slide() {
  return (
    <div>
        <br/>
        <Container>
        <Carousel fade>
  <Carousel.Item id="slide1">
    <div className='capt'>
        <h2>Find Places</h2>
        <h2>Manage Your Budget</h2>
        <h2>While Traveling</h2>

    </div>
  </Carousel.Item>


  <Carousel.Item id="slide2">
  <div className='capt'>
        <h2>Find Places</h2>
        <h2>Manage Your Budget</h2>
        <h2>While Traveling</h2>

    </div>
         </Carousel.Item>

  <Carousel.Item id="slide3">
  <div className='capt'>
        <h2>Find Places</h2>
        <h2>Manage Your Budget</h2>
        <h2>While Traveling</h2>

    </div>
         </Carousel.Item>

  <Carousel.Item id="slide4">
  <div className='capt'>
        <h2>Find Places</h2>
        <h2>Manage Your Budget</h2>
        <h2>While Traveling</h2>

    </div>
         </Carousel.Item>

  <Carousel.Item id="slide5">
  <div className='capt'>
        <h2>Find Places</h2>
        <h2>Manage Your Budget</h2>
        <h2>While Traveling</h2>

    </div>
         </Carousel.Item>


  <Carousel.Item id="slide6">
  <div className='capt'>
        <h2>Find Places</h2>
        <h2>Manage Your Budget</h2>
        <h2>While Traveling</h2>

    </div>
    
  </Carousel.Item>

</Carousel>
        </Container>
     
    </div>
  )
}
