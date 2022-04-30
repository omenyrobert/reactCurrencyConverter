import React,{useState} from 'react'
import '../App.css';


export default function List() {

  const [type, setType] = useState('');
  const [rating, setRating] = useState('');

  const places =[
    {name:'Cool Place'},
    {name:'Churches'},
    {name:'Schools'},
    {name:'Kinder'},
  ]
  return (
    <div>
      <h5>Restauarants, Hotels & Attractions around you</h5>
      <div style={{display:"flex", justifyContent:"space-between"}}>
      <div>
        <p>Type</p>
      <select className='type-select' value={type} onChange={(e)=> setType(e.target.value)}>
        <option value="restauarants"> Restauarants</option>
        <option value="hotels"> Hotels</option>
        <option value="attractions">Attractions</option>
      </select>
      </div>
    
      <div>
        <p>Ratings</p>
      <select className='rating-select' value={rating} onChange={(e)=> setRating(e.target.value)}>
        <option value={0}> All</option>
        <option value={3}>Above 3.0 </option>
        <option value={4}>Above 4.0</option>
        <option value={4.5}>Above 4.5</option>
      </select>
      </div>
       </div>


     
    </div>
  )
}
