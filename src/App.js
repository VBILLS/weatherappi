import React from 'react';
import { config } from 'dotenv';

import Header from './components/Header/Header.component';
import MainPage from './pages/MainPage/MainPage';

import { Container } from 'reactstrap';

import './weathericoncss/css/weather-icons.min.css';
import './App.css';
import { LocationProvider } from './Context/LocationContext';
import { WeatherProvider } from './Context/WeatherContext';

function App() {
  return (
    <div className='App'>
      <LocationProvider>
        <WeatherProvider>
          <Header />
          <Container fluid className='mt-2'>
            <MainPage />
            <div className='poweredby-div'>
              <a href='https://darksky.net/poweredby/'>Powered By Dark Sky</a>
            </div>
          </Container>
        </WeatherProvider>
      </LocationProvider>
    </div>
  );
}

export default App;
