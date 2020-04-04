import React from 'react';

import { Card, CardTitle, CardText, Col, Container, Row } from 'reactstrap';
import './WeatherResopnse.styles.scss';

function WeatherResponse({ cur }) {
  const iconClass = cur.icon;
  return (
    <Container className='WeatherResponse-div m-2'>
      <Card style={{ width: '300px' }} className='currently'>
        <div className='main-title-curSum'>
          <h1 className='cur-icon'>
            <i className={'wi wi-forecast-io-' + iconClass}></i>
          </h1>
          <h3 className='cur-summary lead'>{cur.summary}</h3>
        </div>
        <CardTitle className='cur-temCardTitleerature lead'>
          Temp: <strong>{cur.temperature}</strong>
          Feels Like: <strong>{cur.apparentTemperature}</strong>
        </CardTitle>
        <CardText className='card-text-curSum'>
          <Row className='cur-dew-hum'>
            <Col>Dew Point: {cur.dewPoint}</Col>
            <Col>Humidity: {cur.humidity}</Col>
          </Row>
          <Row className='cur-wind'>
            <Col>Wind Speed: {cur.windSpeed}</Col>
            <Col>Gust: {cur.windGust}</Col>
          </Row>
          <Row className='cur-uv-ozone'>
            <Col>UVIndex: {cur.uvIndex}</Col>
            <Col>Ozone: {cur.ozone}</Col>
          </Row>
        </CardText>
      </Card>
    </Container>
  );
}

export default WeatherResponse;
