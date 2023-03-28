import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const initialState = {
  location: '',
  weatherData: null,
}

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    updateWeather: (state, action) => {
      state.location = action.payload.location; // update the location in the state
      state.weatherData = action.payload.weatherData; // update the weather data in the state
    },
  }
});

export const { updateWeather } = weatherSlice.actions;

export const fetchWeatherData = (location) => async (dispatch) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=ea2ebba4214c311f36ba1cc2619ed14b`;
  const navigate = useNavigate();

  try {
    const response = await axios.get(url);
    console.log('Data from API:', response.data);
    navigate(`/weather?location=${location}`, { state: response.data });
  } catch (error) {
    console.log(error);
  }
};


export default weatherSlice.reducer;