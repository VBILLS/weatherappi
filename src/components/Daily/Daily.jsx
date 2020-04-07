import React, { useContext } from 'react';

import { WeatherContext } from '../../Context/WeatherContext';

import DailyCard from '../DailyCard/DailyCard';

import {
  DailyContainer,
  DailyCardsContainer,
  DailyIcon,
  DailySummary,
  DailyTitle,
  DailyTitleContainer,
} from './Daily.styles';

function Daily() {
  const [weather] = useContext(WeatherContext);
  const iconClass = weather.daily.icon;
  const daily = weather.daily;

  return (
    <DailyContainer>
      <DailyTitleContainer>
        <DailyTitle>Daily:</DailyTitle>
        <DailyIcon className={'wi wi-forecast-io-' + iconClass}></DailyIcon>
        <DailySummary className='daily-summary-main'>
          {daily.summary}
        </DailySummary>
      </DailyTitleContainer>
      <DailyCardsContainer>
        {daily.data &&
          daily.data.map((data) => {
            return <DailyCard key={data.time} data={data} />;
          })}
      </DailyCardsContainer>
    </DailyContainer>
  );
}

export default Daily;
