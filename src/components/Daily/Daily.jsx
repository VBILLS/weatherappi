import React, { useContext } from 'react';

import { WeatherContext } from '../../Context/WeatherContext';

import { Card, Col, Container, Row } from 'reactstrap';

import './Daily.styles.scss';

function Daily() {
  const [weather] = useContext(WeatherContext);
  const iconClass = weather.daily.icon;
  const daily = weather.daily;

  const formatTime = (time) => {
    const strTime = time.toString();
    const addMilli = strTime + '000';
    const convert = parseInt(addMilli, 10);
    const fullTime = new Date(convert);
    return fullTime;
  };

  return (
    <Container className='dailymain-div'>
      <div className='daily-title'>
        <h3>Daily: </h3>
        <div className='daily-icon-main'>
          <i className={'wi wi-forecast-io-' + iconClass}></i>
        </div>
        <p className='tb-summary lead'>{daily.summary}</p>
      </div>
      <div fluid className='daily-cards'>
        {daily.data &&
          daily.data.map((data) => {
            const formattedTime = formatTime(data.time);
            const icon = data.icon;
            const getDay = (num) => {
              let day;
              switch (num) {
                case 0:
                  day = 'Sunday';
                  break;
                case 1:
                  day = 'Monday';
                  break;
                case 2:
                  day = 'Tuesday';
                  break;
                case 3:
                  day = 'Wednesday';
                  break;
                case 4:
                  day = 'Thursday';
                  break;
                case 5:
                  day = 'Friday';
                  break;
                case 6:
                  day = 'Saturday';
                  break;
                default:
                  day = 'Invalid day';
              }
              return day;
            };

            return (
              <Card className='daily-card' key={data.time}>
                <Row noGutters>
                  <Col>
                    <strong>
                      {getDay(formattedTime.getDay())} -
                      <i className={'wi wi-forecast-io-' + icon}></i>
                    </strong>
                  </Col>
                  <Col>{data.summary}</Col>
                </Row>
                <Row noGutters>
                  <Col>Sunrise: {data.sunriseTime}</Col>
                  <Col>Sunset: {data.sunsetTime}</Col>
                  <Col>MoonPhase: {data.moonPhase}</Col>
                </Row>
                <Row noGutters>
                  <Col>Temp Min: {data.temperatureMin}</Col>
                  <Col>Temp Max: {data.temperatureMax}</Col>
                </Row>
              </Card>
            );
          })}
      </div>
    </Container>
  );
}

export default Daily;
