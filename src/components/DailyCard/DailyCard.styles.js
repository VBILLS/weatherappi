import styled from 'styled-components';

import { HourlyCardContainer } from '../Hourly/Hourly.styles';

export const DailyCardContainer = styled(HourlyCardContainer)`
  width: 100%;
  height: auto;
  font-size: 0.7rem;
  text-align: center;
`;

export const DailyCardTitleContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const DailySummaryContainer = styled.div`
  width: 50%;
`;
// dayofweek - icon - summary
// sunrise - sunset- moonphase
// tempMin - tempmax
