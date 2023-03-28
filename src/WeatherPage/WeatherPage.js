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
            <h1>City, Country: {location.state?.name}, {location.state?.sys?.country}</h1>
            <p></p>
            <h3>Temperature: {location.state?.main?.temp.toFixed()}ºF</h3>
            <h3>Humidity: {location.state?.main?.humidity.toFixed()}<AiOutlinePercentage className='percent'/></h3>
            <h3>Feels like: {location.state?.main?.feels_like.toFixed()}ºF</h3>
            <h3>Description: {location.state?.weather[0]?.description}</h3>
            <h3>Mainly: {location.state?.weather[0]?.main}</h3>
            <h3>Wind Speed: {location.state?.wind?.speed} mph</h3>

          </div>
        </Container>
      </div>
    </div>
  );  
}

export default WeatherPage;