
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavbarHeader.css"

import { MdDarkMode } from "react-icons/md";
import FilterData from '../FilterData';
import SearchBar from '../SearchBar';
import dataArray from "../data.json"




function NavbarHeader() {
  

  return (

   <>
    <Navbar expand="lg" className="navbar-custom">
      <Container  >
       
        <Navbar.Brand href="#"><span style={{color:"#FFF", fontSize:"25px", fontFamily:"'Nunito', sans-serif"}}>  where in the world?</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          
          <Nav
            className="ms-auto my-2 mx-5 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <span >dark mode</span>
          <MdDarkMode />
         

          
        </Navbar.Collapse>
       
      </Container>
     
     
    </Navbar>
  
   
    </>
  );
}

export default NavbarHeader;