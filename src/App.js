import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import List from './components/List';
import Map from './components/Map';
import Slick from './components/Slick';
import Slide from './components/Slide';
import TravelGuide from './components/TravelGuide';

function App() {
  return (
    <div>
     <Header/>
     <Banner/>
     <Slide/>
     <Slick/>
     <TravelGuide/>
     <Container>
     <Row>
       
       <Col md={4}>
       <List/>
       </Col>
      
       <Col md={8}>
         <Map/>
       </Col>
     </Row>

     </Container>
    </div>
  );
}

export default App;
