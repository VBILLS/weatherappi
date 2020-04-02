import React from 'react';

import { Card, CardTitle, CardText, Col, Container, Row } from 'reactstrap';

function Hourly({ hourly }) {
  const iconClass = hourly.icon;
  
  const formatTime = (time) => {
    const strTime = time.toString()
    const addMilli = strTime + '000';
    const convert = parseInt(addMilli, 10)
    const fullTime = new Date(convert);
    return fullTime
  }

  return (
    <Container className='TimeBased-div m-2'>
        <h1 className='tb'>Hourly Summary:</h1>
        <i className={'wi wi-forecast-io-' + iconClass}></i>
        <p className='tb-summary lead'>{hourly.summary}</p>

          {hourly.data.map(data => {  
           const formattedTime = formatTime(data.time)
           const icon = data.icon;
            return (
              <Card>
                <CardTitle>{formattedTime.getHours()}</CardTitle>
                
                <Row>
                  <Col><strong><i className={'wi wi-forecast-io-' + icon}></i></strong></Col>
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
