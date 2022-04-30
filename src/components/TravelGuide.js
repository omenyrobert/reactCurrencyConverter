import React from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { Container } from 'react-bootstrap'
import { IoSearch } from 'react-icons/io5'
import '../App.css';

export default function TravelGuide() {
  return (
    <div style={{marginTop:"50px"}}>
      
      <Container>
          <div style={{display:"flex", justifyContent:"space-between"}}>
              <div>
                  
              </div>
              <div>
                 <p>Find many places </p> 
              </div>
              <div>
                  {/* <Autocomplete> */}
                      <div className='search-place-div'>
                          <input type="text" className='search-place' placeholder='search for places here...'/>
                          <IoSearch class="search-place-icon"/>
                      </div>
                  {/* </Autocomplete> */}
              </div>
          </div>

      </Container>
    </div>
  )
}
