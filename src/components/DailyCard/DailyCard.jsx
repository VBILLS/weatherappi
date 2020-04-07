import React from 'react';

import { Card, Col, Row } from 'reactstrap';

import {
  DailyCardContainer,
  DailyCardTitleContainer,
  DailySummaryContainer,
} from './DailyCard.styles';

import './DailyCard.styles.scss';

const DailyCard = ({ data }) => {
  const formatTime = (time) => {
    const strTime = time.toString();
    const addMilli = strTime + '000';
    const convert = parseInt(addMilli, 10);
    const fullTime = new Date(convert);
    return fullTime;
  };

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

  const sunriseTime = formatTime(data.sunriseTime);
  let risehours = sunriseTime.getHours();
  let riseMin = sunriseTime.getMinutes();
  let sunrise = `${risehours}:${riseMin}`;
  const sunsetTime = formatTime(data.sunsetTime);
  let sethours = sunsetTime.getHours();
  let setMin = sunsetTime.getMinutes();
  let sunset = `${sethours}:${setMin}`;

  return (
    <DailyCardContainer key={data.time}>
      <Row noGutters>
        <DailyCardTitleContainer>
          <span className='dow-daily-card'>
            {getDay(formattedTime.getDay())}
          </span>
          <strong className='icon-daily-card'>
            <i className={'wi wi-forecast-io-' + icon}></i>
          </strong>
        </DailyCardTitleContainer>
        <DailySummaryContainer>{data.summary}</DailySummaryContainer>
      </Row>
      <Row noGutters className='sunandmoon-daily-card'>
        <Col>Sunrise: {sunrise}</Col>
        <Col>Sunset: {sunset}</Col>
        <Col>MoonPhase: {data.moonPhase}</Col>
      </Row>
      <Row noGutters className='temp-daily-card'>
        <Col>Temp Min: {data.temperatureMin}</Col>
        <Col>Temp Max: {data.temperatureMax}</Col>
      </Row>
    </DailyCardContainer>
  );
};

export default DailyCard;
