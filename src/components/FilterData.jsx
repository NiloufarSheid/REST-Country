import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import dataArray from "./data.json"
import { Typography } from '@mui/material';
import "./FilterData.css"

function FilterData() {
  const [selectedRegion, setSelectedRegion] = useState('');

  // Extract unique regions from the data
  const regions = Array.from(new Set(dataArray.map(country => country.region)));

  // Filter countries based on the selected region
  const filteredCountries = selectedRegion === 'All' 
    ? dataArray 
    : dataArray.filter(country => country.region === selectedRegion);

  return (
    <Container className='filterData'  sx={{backgroundcolor:"#313442"}}>
      <div className="mb-4 labalCon">
        <label htmlFor="region-select" style={{ marginRight: '10px', backgroundcolor: "#313442",fontFamily:"'Nunito', sans-serif",height:"50px" }}>Filter by Region:</label>
        <select className='selectCountries'
          id="region-select" 
          value={selectedRegion} 
          onChange={(e) => setSelectedRegion(e.target.value)}
        >
          <option value="All" className='optionCountries'></option>
          {regions.map((region, index) => (
            <option key={index} value={region}>{region}</option>
          ))}
        </select>
      </div>
      {selectedRegion !== 'All' && (
        <Row xs={1} sm={2} md={4} className="g-5">
          {filteredCountries.map((country, index) => (
            <Col key={index}>
              <Card border='0'>
                <Card.Img variant="top" src={country.flags.png} alt={`${country.name} flag`} width={200} height={200} />
                <Card.Body>
                  <Typography sx={{ fontWeight: "bold" }}>{country.name}</Typography>
                </Card.Body>
                <Card.Body>
                  <Typography>Population: {country.population}</Typography>
                  <Typography>Region: {country.region}</Typography>
                  <Typography>Capital: {country.capital}</Typography>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default FilterData;