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

  async function handleGetLocName() {
    console.log('starting handleGetLocName');
    const apiKey = process.env.REACT_APP_API_KEY;

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
  }

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
        console.log();
      })
      .catch((err) => console.error);
  }

  function handleGetWeather() {
    if (loc.lat && loc.lng) {
      console.log('locationfromContext - ', loc);
      fetchWeatherData(loc.lat, loc.lng);
    } else if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (pos) {
        const lat2 = pos.coords.latitude;
        const lng2 = pos.coords.longitude;
        setLoc({ lat: lat2, lng: lng2 });
        console.log('from geolocation');
        fetchWeatherData(lat2, lng2);
      });
    }

    return;
  }

  return (
    <div className='weatherMain'>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <Button onClick={handleGetWeather}>Get Weather</Button>
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
