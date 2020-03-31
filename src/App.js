import React, { useState } from 'react';

import './App.css';
import WeatherResponse from './components/WeatherResponse/WeatherResponse';

function App() {
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [data, setData] = useState('');
  const [cur, setCur] = useState('');

  async function fetchData(lat, lng) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    await fetch(
      `${proxy}https://api.darksky.net/forecast/64ba8a3916e562da1c3038e0e454a0e8/44.451469599999996,-73.1758752`
    )
      .then(res => {
        console.log('res-fromFetch', res);
        return res.json();
      })
      .then(res2 => {
        console.log('data-fromFetch', res2);
        setData(res2);
        setCur(res2.currently);
      })
      .catch(err => console.error);
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(pos) {
        setLat(pos.coords.latitude);
        setLng(pos.coords.longitude);
        const position = pos.coords;
        return position;
      });
    }
  }

  async function handleGetWeather() {
    await getLocation();
    await fetchData(lat, lng);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Weather App!!</h1>
        {lat && lng ? (
          <div>
            Your Coordinates Lat: {lat}, Lng: {lng}
          </div>
        ) : (
          <div>Load your Coordinates...</div>
        )}
        <br />
        <button onClick={getLocation}>Get Location</button>
        <button onClick={handleGetWeather}>GetWeather</button>
        <br />
        {data ? <div>{data.timezone}</div> : <div>waiting for data...</div>}
        {cur ? (
          <div>
            <WeatherResponse cur={cur} />
          </div>
        ) : (
          <div>Waiting for current data...</div>
        )}
      </header>
      <div className='poweredby-div'>
        <a href='https://darksky.net/poweredby/'>Powered By Dark Sky</a>
      </div>
    </div>
  );
}

export default App;
