import React, { useContext, useState } from 'react';

import { LocationContext } from '../../Context/LocationContext';
import { WeatherContext } from '../../Context/WeatherContext';

import CustButton from '../CustButton/CustButton.component';
import { Button, Spinner } from 'reactstrap';

function GetWeatherButton() {
  const [loc, setLoc] = useContext(LocationContext);
  const [weather, setWeather] = useContext(WeatherContext);

  const [isLoading, setIsLoading] = useState(false);

  async function fetchWeatherData() {
    console.log('starting fetchWeatherData');
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    setIsLoading(true);
    await fetch(
      `${proxy}https://api.darksky.net/forecast/64ba8a3916e562da1c3038e0e454a0e8/${loc.lat},${loc.lng}`,
      {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
        }),
      }
    )
      .then((res) => res.json())
      .then((weathData) => {
        setWeather(weathData);
        setIsLoading(false);
        console.log('setweathdata - run');
      })
      .catch((err) => console.error);
  }

  return (
    <CustButton
      onClick={fetchWeatherData}
      style={{
        backgroundColor: '#514158',
        border: 'none',
        boxShadow: '4px 2px 2px #00000099',
      }}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <p style={{ margin: 0, padding: 0 }}>
          Get Weather
          <i className='fas fa-thermometer-quarter'></i>
        </p>
      )}
    </CustButton>
  );
}

export default GetWeatherButton;
