import React from 'react'
import GoogleMapReact from 'google-map-react'
import {FaMapMarkerAlt, FaStar, FaStarHalfAlt} from 'react-icons/fa'

export default function Map() {

    const coordinates = {lat:0, lng: 0}


  return (
    <div>
        <FaStar/>
        <FaStarHalfAlt/>
        <FaMapMarkerAlt/>
      <div  style={{width: "100%", height:"500px"}}>
          <GoogleMapReact 
           bootstrapURLKeys={{key:'AIzaSyBdb1zvZHEiOyLbk55M4gPUNyQ4M3erseE' }}
          defaultCenter={coordinates}
          center={coordinates}
         defaultZoom={14}
          margin={[50,50,50,50]}
          
           options={''}
           onChange={''}
           onChildClick={''}
          >

          </GoogleMapReact>
      </div>
    </div>
  )
}
