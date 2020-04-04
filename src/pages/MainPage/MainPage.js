import React, { useContext, useEffect } from 'react';

import { LocationContext } from '../../Context/LocationContext';

import MapContainer from '../../components/MapContainer/MapContainer';
import Hourly from '../../components/Hourly/Hourly';
import WeatherMain from '../WeatherMain/WeatherMain';

import { Container } from 'reactstrap';
import './MainPage.styles.scss';

const MainPage = () => {
  const [loc, setLoc] = useContext(LocationContext);

  const getDeviceLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (pos) {
        const lat2 = pos.coords.latitude;
        const lng2 = pos.coords.longitude;
        setLoc({ lat: lat2, lng: lng2 });
      });
    }
  };

  useEffect(() => {
    getDeviceLocation();
  }, []);

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
