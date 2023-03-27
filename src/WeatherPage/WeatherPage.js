import React from 'react';
import { useLocation } from 'react-router';
import { Container } from 'react-bootstrap';
import './weather.css';
import { TbTemperatureFahrenheit } from 'react-icons/tb';
import { AiOutlinePercentage } from 'react-icons/ai';

const WeatherPage = (props) => {
  const location = useLocation();
  //console.log(location);

  return (
    <div className='bgweather'>
      <div>
        <Container>
          <div>
            <h1>City, Country: {location.state.name}, {location.state.sys.country}</h1>
            <h2>Temperature: {location.state.main.temp.toFixed()}ºF</h2>
            <h2>Humidity: {location.state.main.humidity.toFixed()}<AiOutlinePercentage className='percent'/></h2>
            <h2>Feels like: {location.state.main.feels_like.toFixed()}ºF</h2>
          </div>
        </Container>
      </div>
    </div>
  );  
}

export default WeatherPage;