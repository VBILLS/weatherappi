import React from 'react';

import MapContainer from '../../components/MapContainer/MapContainer';
import Hourly from '../../components/Hourly/Hourly';
import WeatherMain from '../WeatherMain/WeatherMain';

import { Container } from 'reactstrap';
import './MainPage.styles.scss';

const MainPage = () => {
  return (
    <Container fluid>
      <div className='mainpage-map-curtemp'>
        <MapContainer />
        <WeatherMain />
      </div>
      <div className='hourly-summary'>
        <Hourly />
      </div>
    </Container>
  );
};

export default MainPage;
