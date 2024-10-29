import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import data from "../data.json";

function Countries(name,population, region,capital) {
  return (
    <Container className='mt-5 mb-5' >
    <Row xs={1} sm={2} md={4} className="g-5">
      {data.map((country, index) => (
        <Col key={index}>
          <Card>
            <Card.Img variant="top" src={country.flags.png} width={200} height={200}/>
            <Card.Body>
            <h5> {country.name}</h5>
              <p>Population {country.population}</p>
              <p>Region {country.region}</p>
              <p>Capital {country.capital}</p>
            </Card.Body>
          </Card>
        </Col>

      ))}
    </Row>
    </Container>
  );
}

export default Countries;