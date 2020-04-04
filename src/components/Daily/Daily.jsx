import React from 'react';

import { Card, CardTitle, Col, Container, Row } from 'reactstrap';

function Daily({ daily }) {
  const iconClass = daily.icon;
  return (
    <Container className='TimeBased-div m-2'>
      <Card style={{ width: '300px' }} className=''>
        <CardTitle>Daily</CardTitle>
        <h1 className='tb-icon'>
          <i className={'wi wi-forecast-io-' + iconClass}></i>
        </h1>
        <p className='tb-summary lead'>{daily.summary}</p>
      </Card>

      {daily.data &&
        daily.data.map((data) => {
          return (
            <Card>
              <Row>
                <Col>Sunrise: {data.sunriseTime}</Col>
                <Col>Sunset: {data.sunsetTime}</Col>
                <Col>MoonPhase: {data.moonPhase}</Col>
              </Row>
              <Row>
                <Col>Temp Min: {data.temperatureMin}</Col>
                <Col>Temp Max: {data.temperatureMax}</Col>
              </Row>
            </Card>
          );
        })}
    </Container>
  );
}

export default Daily;
