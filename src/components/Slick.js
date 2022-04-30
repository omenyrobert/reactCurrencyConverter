import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css';
import { Container } from "react-bootstrap";

export default function Slick() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        slickPlay: true,
        arrows: true,
      };

  return (
    <div>
      <Container>
        <br/>
<div style={{display:"flex", justifyContent:"space-between", marginLeft:"100px", marginRight:"100px"}}>
<div >
<select className='selectt'>
<option>Choose Country</option>
</select>
</div>
<div>
<select className='selectt'>
<option>Filter by category</option>
</select>
</div>

</div>
     <br/>
     <h4>Categories</h4>
      <Slider {...settings}>
        <div style={{margin: "10px"}}>
        <div className="cat1">
          <div className="catcap">
          Parks
          </div>
      </div>
        </div>
      
        <div style={{margin: "10px"}}>
      <div className="cat2">
      <div className="catcap">
        Fittness Gyms

</div>
      </div>
      </div>
      
      <div style={{margin: "10px"}}>
      <div className="cat3">
      <div className="catcap">
        Fashion Houses

</div>
        
      </div>
      </div>

      <div style={{margin: "10px"}}>
      <div className="cat4">
      <div className="catcap">
        Hospitals

</div>
      </div>
      </div>

      <div style={{margin: "10px"}}>
      <div className="cat5">
      <div className="catcap">
        Restautrant

</div>
      </div>
      </div>
      
      <div style={{margin: "10px"}}>
      <div className="cat6">
      <div className="catcap">
        Banks

</div>
      </div>
      </div>
       
      <div style={{margin: "10px"}}>
      <div className="cat">
      <div className="catcap">
Hotels
</div>
      </div>
      </div>
    </Slider>
    </Container>
    <br/>
    </div>
  )
}
