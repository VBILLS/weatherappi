import React, { useContext, useEffect } from 'react';

import { LocationContext } from '../../Context/LocationContext';

import MapContainer from '../../components/MapContainer/MapContainer';
import Daily from '../../components/Daily/Daily';
import Hourly from '../../components/Hourly/Hourly';
import WeatherMain from '../WeatherMain/WeatherMain';

import { Container } from 'reactstrap';
import './MainPage.styles.scss';

const MainPage = () => {
  const [loc] = useContext(LocationContext);

  return (
    <Container fluid>
      <div className='mainpage-map-curtemp'>
        <MapContainer />
        <WeatherMain />
      </div>
      <div className='main-summaries'>
        <Hourly />
        <Daily />
      </div>
    </Container>
  );
};

export default MainPage;
