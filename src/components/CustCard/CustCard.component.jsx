import React from 'react';

import { CustCardContainer } from './CustCard.styles';

const CustCard = ({ children, ...props }) => {
  return <CustCardContainer {...props}>{children}</CustCardContainer>;
};

export default CustCard;
