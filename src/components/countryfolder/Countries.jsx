import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import dataArray from "../data.json";
import { Typography } from '@mui/material';


function Countries(name,population,region,capital) {
  return (
    <Container className='mt-5 mb-5' >
    <Row xs={1} sm={2} md={4} className="g-5">
      {dataArray.map((country, index) => (
        <Col key={index}>
          <Card  border='0'>
            <Card.Img variant="top" src={country.flags.png} alt={`${name} flags`} width={200} height={200}/>
            <Card.Body>
            <Typography sx={{fontWeight:"bold"}}> {country.name}</Typography>
            </Card.Body>

            <Card.Body>
              <Typography >Population {country.population}</Typography>
              <Typography>Region {country.region}</Typography>
              <Typography>Capital {country.capital}</Typography>
            </Card.Body>
          </Card>
        </Col>

      ))}
    </Row>
    </Container>
  );
}

export default Countries;