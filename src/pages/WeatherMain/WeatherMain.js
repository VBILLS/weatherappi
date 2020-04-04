import React, { useContext, useState } from 'react';

import { LocationContext } from '../../Context/LocationContext';
import { WeatherContext } from '../../Context/WeatherContext';

import Daily from '../../components/Daily/Daily';
import Hourly from '../../components/Hourly/Hourly';
import WeatherResponse from '../../components/WeatherResponse/WeatherResponse';

import { Button, Spinner } from 'reactstrap';

function WeatherMain() {
  const [loc, setLoc] = useContext(LocationContext);
  const [weather, setWeather] = useContext(WeatherContext);

  const [isLoading, setIsLoading] = useState(false);

  async function fetchWeatherData(lat, lng) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    setIsLoading(true);
    await fetch(
      `${proxy}https://api.darksky.net/forecast/64ba8a3916e562da1c3038e0e454a0e8/${lat},${lng}`,
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
        console.log(weathData);
      })
      .catch((err) => console.error);
  }

  function handleGetWeather() {
    if (loc.lat && loc.lng) {
      fetchWeatherData(loc.lat, loc.lng);
    } else if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (pos) {
        const lat2 = pos.coords.latitude;
        const lng2 = pos.coords.longitude;
        setLoc({ lat: lat2, lng: lng2 });
        fetchWeatherData(lat2, lng2);
      });
    }
  }

  return (
    <div className='weatherMain'>
      {isLoading ? (
        <Spinner />
      ) : (
        <Button onClick={handleGetWeather}>Get Weather</Button>
      )}
      <WeatherResponse cur={weather.currently} />
    </div>
  );
}

export default WeatherMain;
