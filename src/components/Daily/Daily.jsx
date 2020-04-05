import React, { useContext } from 'react';

import { WeatherContext } from '../../Context/WeatherContext';

import DailyCard from '../DailyCard/DailyCard';

import { Card, Col, Container, Row } from 'reactstrap';

import './Daily.styles.scss';

function Daily() {
  const [weather] = useContext(WeatherContext);
  const iconClass = weather.daily.icon;
  const daily = weather.daily;

  return (
    <Container fluid className='dailymain-div m-2'>
      <div className='daily-title'>
        <h3>Daily: </h3>
        <div className='daily-icon-main'>
          <i className={'wi wi-forecast-io-' + iconClass}></i>
        </div>
        <p className='daily-summary-main'>{daily.summary}</p>
      </div>
      <div className='daily-cards'>
        {daily.data &&
          daily.data.map((data) => {
            return <DailyCard key={data.time} data={data} />;
          })}
      </div>
    </Container>
  );
}

export default Daily;
