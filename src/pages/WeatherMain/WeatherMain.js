import React, { useContext, useState } from 'react';

import { LocationContext } from '../../Context/LocationContext';
import { WeatherContext } from '../../Context/WeatherContext';

import CustButton from '../../components/CustButton/CustButton.component';
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
        } else {
          console.log(res.status);
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
        console.log('setweathdata - run');
      })
      .catch((err) => console.error);
  }

  return (
    <div className='weatherMain'>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className='weatherMain-button-div'>
          <CustButton
            className='weatherMain-button'
            onClick={getCurrentLocation}
          >
            <i className='fas fa-location-arrow'></i>
          </CustButton>
          <CustButton className='weatherMain-button' onClick={fetchWeatherData}>
            Get Weather
          </CustButton>
          <CustButton className='weatherMain-button' onClick={handleGetLocName}>
            Get Location Name
          </CustButton>
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
