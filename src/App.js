import React, { useState } from 'react';

import Header from './components/Header/Header.component';
import WeatherResponse from './components/WeatherResponse/WeatherResponse';

import './assets/css/weather-icons.min.css';
import './App.css';

function App() {
  const [data, setData] = useState('');
  const [cur, setCur] = useState('');

  async function fetchData(lat, lng) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    await fetch(
      `${proxy}https://api.darksky.net/forecast/64ba8a3916e562da1c3038e0e454a0e8/${lat},${lng}`,
      {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json'
        })
      }
    )
      .then(res => {
        console.log('res-fromFetch', res);
        return res.json();
      })
      .then(res2 => {
        console.log('data-fromFetch', res2);
        setData(res2);
        setCur(res2.currently);
        return res2;
      })
      .catch(err => console.error);
  }

  function handleGetWeather() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(pos) {
        const lat2 = pos.coords.latitude;
        const lng2 = pos.coords.longitude;

        fetchData(lat2, lng2);
      });
    }
  }

  return (
    <div className='App'>
      <Header handleGetWeather={handleGetWeather} />
      <div className='content-body'>
        {data ? <div>{data.timezone}</div> : <div>waiting for data...</div>}
        {cur && (
          <div>
            <WeatherResponse cur={cur} />
          </div>
        )}
      </div>
      <div className='poweredby-div'>
        <a href='https://darksky.net/poweredby/'>Powered By Dark Sky</a>
      </div>
    </div>
  );
}

export default App;
