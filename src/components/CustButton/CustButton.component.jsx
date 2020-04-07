import React from 'react';

import { CustButtonContainer } from './CustButton.styles';

const CustButton = ({ children, ...props }) => {
  return <CustButtonContainer {...props}>{children}</CustButtonContainer>;
};

export default CustButton;
