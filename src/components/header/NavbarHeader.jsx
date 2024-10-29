
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import "./NavbarHeader.css"
import SearchBar from '../SearchBar';
import  dataArray from "../data.json";



function NavbarHeader() {
  

  return (

   <>
    <Navbar expand="lg" className="navbar-custom">
      <Container >
        <Navbar.Brand href="#"><span style={{color:"#FFF", fontSize:"25px", fontFamily:"'Nunito', sans-serif"}}>  where in the world?</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 mx-5 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container>
    <SearchBar  placeholder="Search for a country..." data={dataArray}/>
          
          </Container>
    </>
  );
}

export default NavbarHeader;