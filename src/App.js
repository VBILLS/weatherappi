import React from 'react';

import Header from './components/Header/Header.component';
import MainPage from './pages/MainPage/MainPage';

import { Col, Container, Row } from 'reactstrap';

import './weathericoncss/css/weather-icons.min.css';
import './App.css';
import { LocationProvider } from './Context/LocationContext';

function App() {
  return (
    <div className='App'>
      <LocationProvider>
        <Header />
        <Container fluid className='mt-2'>
          <MainPage />
          <div className='poweredby-div'>
            <a href='https://darksky.net/poweredby/'>Powered By Dark Sky</a>
          </div>
        </Container>
      </LocationProvider>
    </div>
  );
}

export default App;
