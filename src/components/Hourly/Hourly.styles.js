import styled from 'styled-components';

import { CustCardContainer } from '../CustCard/CustCard.styles';

export const HourlyContainer = styled.div`
  max-width: 100%;
  max-height: 8rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const HourlyTitleContainer = styled.div`
  max-width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const HourlyCardsContainer = styled.div`
  margin: 0;
  max-width: 70%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
`;

export const HourlyCardContainer = styled(CustCardContainer)`
  flex: 0 0 auto;
  width: 3rem;
  height: 4rem;
  font-size: 8px;
  padding: 2px;
  margin: 2px;
  border: 1px solid #312b33;
`;

export const HourlyTitle = styled.h3`
  color: #b8a2c2;
`;

export const HourlyIcon = styled.i`
  font-size: 24px;
`;

export const HourlySummary = styled.p`
  margin-top: 0.5rem;
  text-align: center;
`;
