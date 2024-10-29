import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FOREGROUND } from '../../helpers/colors';
import "./NavbarHeader.css"


function NavbarHeader() {
  return (
   <>
    <Navbar expand="lg" className="navbar-custom">
      <Container >
        <Navbar.Brand href="#"><span style={{color:"#FFF"}}>  where in the world?</span></Navbar.Brand>
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
    <Form className="form-lable"  >
            <Form.Control
              type="search"
              placeholder="search"
              className="me-2 search-input"
              aria-label="Search"
            />
            <Button className='search-button' variant="outline-success">search</Button>
          </Form>
          </Container>
    </>
  );
}

export default NavbarHeader;