import React from 'react'
import {useState, useEffect} from "react"
import { Col, Row } from 'react-bootstrap'
import CurrencyInput from './CurrencyInput'
import axios from 'axios'

export default function Banner() {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('UGX');
  const [rates, setRates] = useState([]);

  
useEffect(() =>{
axios.get('http://data.fixer.io/api/latest?access_key=fde98c741d3709ae5bed6647b807809e')
.then(response =>{
setRates(response.data.rates);
})
},[]);




useEffect(() => {
  if (!!rates) {
    function init() {
      handleAmount1Change(1);
    }
    init();
  }
}, [rates]);



function format(number) {
  return number.toFixed(2);
}

function handleAmount1Change(amount1) {
  setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
  setAmount1(amount1);
}

function handleCurrency1Change(currency1) {
  setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
  setCurrency1(currency1);
}

function handleAmount2Change(amount2) {
  setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
  setAmount2(amount2);
}

function handleCurrency2Change(currency2) {
  setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
  setCurrency2(currency2);
}





  return (
    <div className='banner'>
      <Row class="roww">
          <Col md={6} style={{padding:"50px"}}>
           
           
           <CurrencyInput
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
        currencies={Object.keys(rates)}
        amount={amount1}
        currency={currency1} />

      <CurrencyInput
        onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
        currencies={Object.keys(rates)}
        amount={amount2}
        currency={currency2} />



          </Col>
          <Col md={6} >
            <div class="wordss">
            <h2 className='title'>Create and Manage Your<br/>
             Travel Budget</h2>
            </div>
            <div class="wordss2">
            <h6 style={{color:"#000"}}>Find places around where your go to like hotels, restaurants etc</h6>
            <button class="get-started-botton">GET STARTED</button>
            </div>

         
          </Col>

      </Row>
    </div>
  )
}
