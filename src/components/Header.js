import React from 'react'
import {useState} from 'react'
import {IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoWhatsapp, IoMenu, IoSearch} from 'react-icons/io5'
import {Navbar, Container, Nav, Form, FormControl, Modal,Button} from 'react-bootstrap';
import '../App.css';


export default function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar style={{margin:"30px"}}  expand="lg">
  <Container fluid style={{display:"flex", justifyContent:"space-between"}}>
    <div className='logo-side'>
    <Navbar.Brand href="#">Logo</Navbar.Brand>
    </div>
  <div className='search-side'>
  <Form id="search-bar" className="d-flex ">
        <FormControl
          type="search"
          placeholder="Find any place here..."
          className=""
          aria-label="Search"
          id="search-bar"
        />
        <IoSearch class="search-icon"/>
      </Form>
  </div>
 
      <div className='nav-side'>
      <IoMenu onClick={handleShow} class="menu-icon"/>
      <Modal show={show} onHide={handleClose} >
      <h2 style={{backgroundColor:"#fff", paddingRight:"30px",textAlign:"right"}} onClick={handleClose}>X</h2>
        <Modal.Body class="mmodal">
        <Nav.Link  href="#action2"><p style={{color:"#000"}}> Signup</p></Nav.Link>
        <Nav.Link   href="#action2"><p style={{color:"#000"}}>Add Place</p></Nav.Link>
        <Nav.Link   href="#"><p style={{color:"#000"}}>Create budget</p></Nav.Link>
        <br/>
        <div style={{display:"flex",padding:"10px"}}>
        <IoLogoFacebook class="side-nav-icon"/>
        <IoLogoInstagram class="side-nav-icon"/>
        <IoLogoTwitter class="side-nav-icon"/>
        <IoLogoWhatsapp class="side-nav-icon"/>
        </div>
       
        </Modal.Body>
     
      </Modal>
      <div class="linkks">
        <div style={{display:"flex"}}>
        <Nav.Link  href="#action2"><p className='nav-links'> Signup</p></Nav.Link>
        <Nav.Link   href="#action2"><p className='nav-links'>Add Place</p></Nav.Link>
        <Nav.Link   href="#"><p className='nav-links'>Create budget</p></Nav.Link>
        </div>
        </div>
      </div>
  
     
  </Container>
</Navbar>
    </div>
  )
}
