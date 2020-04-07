import React, { useContext } from 'react';

import { WeatherContext } from '../../Context/WeatherContext';

import {
  HourlyContainer,
  HourlyCardsContainer,
  HourlyCardContainer,
  HourlyIcon,
  HourlySummary,
  HourlyTitle,
  HourlyTitleContainer,
} from './Hourly.styles';

import { CardTitle, CardText } from 'reactstrap';

function Hourly() {
  const [weather] = useContext(WeatherContext);
  const iconClass = weather.hourly.icon;
  const hourly = weather.hourly;

  const formatTime = (time) => {
    const strTime = time.toString();
    const addMilli = strTime + '000';
    const convert = parseInt(addMilli, 10);
    const fullTime = new Date(convert);
    return fullTime;
  };

  return (
    <HourlyContainer>
      <HourlyTitleContainer>
        <HourlyTitle>Hourly:</HourlyTitle>
        <HourlyIcon className={'wi wi-forecast-io-' + iconClass}></HourlyIcon>
        <HourlySummary className='hourly-summary-main'>
          {hourly.summary}
        </HourlySummary>
      </HourlyTitleContainer>

      <HourlyCardsContainer>
        {hourly.data &&
          hourly.data.map((data) => {
            const formattedTime = formatTime(data.time);
            const icon = data.icon;
            return (
              <HourlyCardContainer key={data.time}>
                <CardTitle>
                  {formattedTime.getHours()} -
                  <strong>
                    <i className={'wi wi-forecast-io-' + icon}></i>
                  </strong>
                </CardTitle>
                <CardText>
                  <i className='fas fa-thermometer-half'></i> {data.temperature}
                  <br />
                  <i className='fas fa-umbrella'></i> {data.precipProbability}
                </CardText>
              </HourlyCardContainer>
            );
          })}
      </HourlyCardsContainer>
    </HourlyContainer>
  );
}

export default Hourly;
