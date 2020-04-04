import React from 'react';

import MapContainer from '../../components/MapContainer/MapContainer';
// import WeatherResponse from '../../components/WeatherResponse/WeatherResponse';
import WeatherMain from '../WeatherMain/WeatherMain';

import { Col, Row } from 'reactstrap';

const MainPage = ({ cur }) => {
  return (
    <Row>
      <Col>
        <MapContainer />
      </Col>
      <Col>
        <WeatherMain />
      </Col>
    </Row>
  );
};

export default MainPage;
