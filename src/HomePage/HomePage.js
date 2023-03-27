import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './home.css';
import { TfiLocationArrow } from 'react-icons/tfi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=ea2ebba4214c311f36ba1cc2619ed14b`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      const location = event.target.value;
      axios.get(url).then((response) => {
        setData(response.data);
        console.log('Data from API:', response.data);
        navigate(`/weather?location=${location}`, { state: response.data });
      });
      setLocation('');
    }
  };

  return (
    <>
      <div className='background'>
        <Container>
          <div className='logo'></div>

          <div className='search'>
            <input
              type='text'
              placeholder='Enter location'
              className='fontstyle'
              onChange={(event) => setLocation(event.target.value)}
              value={location}
              onKeyPress={searchLocation}
            />
            <TfiLocationArrow className='icon' />

            <p>
              ClimateSmart is a beautiful and simple weather application that
              displays the weather information, gives travel and clothing
              recommendations, personalized recommendations weather alerts, and
              more.
            </p>

          </div>
        </Container>
      </div>
    </>
  );
}
