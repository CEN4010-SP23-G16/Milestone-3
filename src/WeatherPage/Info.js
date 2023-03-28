import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiOutlinePercentage } from 'react-icons/ai';
import { useLocation } from 'react-router';

export default function Info() {
  const location = useLocation();
  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <h1>{location.state.name}, {location.state.sys.country}</h1>
          </Col>
          <div id='weatherinfo'>
          
          <h2>Temperature: {location.state.main.temp.toFixed()}ºF</h2>
          <h2>Humidity: {location.state.main.humidity.toFixed()}<AiOutlinePercentage className='percent'/></h2>
          <h2>Feels like: {location.state.main.feels_like.toFixed()}ºF</h2>
        </div>
        </Row>
        
      </Container>
      
    </>
  )
}
