import React, { useContext, useState } from 'react';

import { LocationContext } from '../../Context/LocationContext';
import { WeatherContext } from '../../Context/WeatherContext';

import WeatherResponse from '../../components/WeatherResponse/WeatherResponse';

import { Button, Spinner } from 'reactstrap';

import './WeatherMain.styles.scss';

function WeatherMain() {
  const [loc, setLoc] = useContext(LocationContext);
  const [weather, setWeather] = useContext(WeatherContext);

  const [isLoading, setIsLoading] = useState(false);

  function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLoc({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      console.log('WeatherMain -- geo loc - setloc', loc);
    });
  }

  async function handleGetLocName() {
    console.log('starting handleGetLocName');
    const apiKey = process.env.REACT_APP_API_KEY;
    setIsLoading(true);
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${loc.lat},${loc.lng}&key=${apiKey}`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 'OK') {
          console.log('res-after-latLngCallLoc', res);
          setLoc({
            ...loc,
            address_components: res.results,
            foradd: res.results[5].formatted_address,
          });
          setIsLoading(false);
        } else {
          console.log(res.status);
          setIsLoading(false);
        }
      })
      .catch((err) => console.log(err));
    setIsLoading(false);
  }

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
        console.log('setweathdata', loc.lat);
      })
      .catch((err) => console.error);
  }

  return (
    <div className='weatherMain'>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <Button onClick={getCurrentLocation}>Get Current Location</Button>
          <Button onClick={fetchWeatherData}>Get Weather</Button>
          <Button onClick={handleGetLocName}>Get Location Name</Button>
        </div>
      )}
      <WeatherResponse cur={weather.currently} />
    </div>
  );
}

export default WeatherMain;

// const results = JSON.parse(localStorage.getItem('WeatherResults'));
//     if (results) {
//       setWeather(results);
//     } else
