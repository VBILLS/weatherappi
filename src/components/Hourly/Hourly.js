import React from 'react';

import { Card, CardTitle, Col, Container, Row } from 'reactstrap';

import './Hourly.styles.scss';

function Hourly({ hourly }) {
  const iconClass = hourly.icon;

  const formatTime = (time) => {
    const strTime = time.toString();
    const addMilli = strTime + '000';
    const convert = parseInt(addMilli, 10);
    const fullTime = new Date(convert);
    return fullTime;
  };

  return (
    <Container className='TimeBased-div m-2'>
      <div>
        <h3 className='tb'>Hourly Summary:</h3>
        <i className={'wi wi-forecast-io-' + iconClass}></i>
        <p className='tb-summary lead'>{hourly.summary}</p>
      </div>

      {hourly.data.map((data) => {
        const formattedTime = formatTime(data.time);
        const icon = data.icon;
        return (
          <Card className='hourly-card'>
            <Row>
              <Col>
                <CardTitle>{formattedTime.getHours()}</CardTitle>
              </Col>
              <Col>
                <strong>
                  <i className={'wi wi-forecast-io-' + icon}></i>
                </strong>
              </Col>
            </Row>
            <Row>
              <Col>Temp: {data.temperature}</Col>
              <Col>Feels Like: {data.apparentTemperature}</Col>
            </Row>
          </Card>
        );
      })}
    </Container>
  );
}

export default Hourly;
