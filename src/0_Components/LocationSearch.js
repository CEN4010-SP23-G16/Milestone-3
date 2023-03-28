import React, { useState } from 'react';
import { TfiLocationArrow } from 'react-icons/tfi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LocationSearch() {
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=ea2ebba4214c311f36ba1cc2619ed14b`;

  const searchLocation = () => {
    axios.get(url).then((response) => {
      console.log('Data from API:', response.data);
      navigate(`/weather?location=${location}`, { state: response.data });
    });
    setLocation('');
  };
  

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchLocation();
    }
  };
  
  return (
    <>
      
      <input
        type='text'
        placeholder='Enter location'
        className='fontstyle'
        onChange={(event) => setLocation(event.target.value)}
        value={location}
        onKeyDown={handleKeyPress}
      />

      <button
        className='searchButton'
        onClick={searchLocation}
      >
        <TfiLocationArrow className='icon' />
      </button>
    </>
  )
}
