import React from 'react';
import { Container } from 'react-bootstrap';
import LocationSearch from '../0_Components/LocationSearch';

export default function WeatherPage(props) {
  const state = props.location?.state;
  console.log('state:', state); // Add this line to see if the state is defined
  const { weatherData } = state || {};
  console.log('weatherData:', weatherData); // Add this line to see if weatherData is defined

  return (
    <>
      <Container>
        <LocationSearch />
        <div>
          {weatherData ? (
            <>
              <h1>{weatherData.name}, {weatherData.sys.country}</h1>
              <h2>{weatherData.weather[0].main}</h2>
              <p>Temperature: {weatherData.main.temp}°F</p>
              <p>Humidity: {weatherData.main.humidity}%</p>
              <p>Wind Speed: {weatherData.wind.speed} mph</p>
            </>
          ) : (
            <h1>No weather data found</h1>
          )}
        </div>
      </Container>
    </>
  );
}
