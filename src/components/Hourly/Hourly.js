import React from 'react';

import { Card, CardTitle, CardText, Col, Container, Row } from 'reactstrap';

function Hourly({ hourly }) {
  const iconClass = hourly.icon;
  return (
    <Container className='TimeBased-div m-2'>
      <Card style={{ width: '300px' }} className=''>
        <CardTitle>Hourly</CardTitle>
        <h1 className='tb-icon'>
          <i className={'wi wi-forecast-io-' + iconClass}></i>
        </h1>
        <h3 className='tb-summary lead'>{hourly.summary}</h3>
        <CardText>
          {hourly.data.map(data => {
            return (
              <>
                <Row>{data.summary}</Row>
                <Row>
                  <Col>Temp: {data.temperature}</Col>
                  <Col></Col>
                </Row>
              </>
            );
          })}
        </CardText>
      </Card>
    </Container>
  );
}

export default Hourly;
