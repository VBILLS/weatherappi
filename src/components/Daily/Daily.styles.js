import styled from 'styled-components';

import {
  HourlyCardsContainer,
  HourlyTitleContainer,
  HourlyContainer,
} from '../Hourly/Hourly.styles';

export const DailyContainer = styled(HourlyContainer)`
  max-height: 200px;
`;

export const DailyTitleContainer = styled(HourlyTitleContainer)``;

export const DailyCardsContainer = styled(HourlyCardsContainer)`
  width: 70%;
  height: 180px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2px;

  overflow-y: auto;
`;

export const DailyTitle = styled.h3`
  color: #b8a2c2;
`;

export const DailyIcon = styled.i`
  font-size: 24px;
`;

export const DailySummary = styled.p`
  margin-top: 0.5rem;
  text-align: center;
`;
