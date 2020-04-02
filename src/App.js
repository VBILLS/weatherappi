import React, { useState, useContext } from 'react';

import Header from './components/Header/Header.component';
import Daily from './components/Daily/Daily';
import Hourly from './components/Hourly/Hourly';
import WeatherResponse from './components/WeatherResponse/WeatherResponse';

import { Container, Spinner } from 'reactstrap';

import './weathericoncss/css/weather-icons.min.css';
import './App.css';
import { LocationProvider, LocationContext } from './Context/LocationContext';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [cur, setCur] = useState('');
  const [hourly, setHourly] = useState('');
  const [daily, setDaily] = useState('');

  const [loc, setLoc] = useContext(LocationContext);

  async function fetchWeatherData(lat, lng) {
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
        setCur(res2.currently);
        setHourly(res2.hourly);
        setDaily(res2.daily);
        setIsLoading(false);
        return res2;
      })
      .catch(err => console.error);
  }

  function handleGetWeatherbyDeviceLoc() {
    setIsLoading(true);
    if (loc.lat && loc.lng) {
      fetchWeatherData(loc.lat, loc.lng);
    } else if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(pos) {
        const lat2 = pos.coords.latitude;
        const lng2 = pos.coords.longitude;
        setLoc({ lat: lat2, lng: lng2 });
        fetchWeatherData(lat2, lng2);
      });
    }
  }

  return (
    <div className='App'>
      <LocationProvider>
        <Header handleGetWeatherbyDeviceLoc={handleGetWeatherbyDeviceLoc} />
        <Container fluid className='mt-2'>
          <div className='content-body'>
            {isLoading && <Spinner color='light' />}
            {cur && (
              <div>
                <WeatherResponse cur={cur} />
              </div>
            )}
            {hourly && <Hourly hourly={hourly} />}

            {daily && <Daily daily={daily} />}
          </div>
          <div className='poweredby-div'>
            <a href='https://darksky.net/poweredby/'>Powered By Dark Sky</a>
          </div>
        </Container>
      </LocationProvider>
    </div>
  );
}

export default App;
