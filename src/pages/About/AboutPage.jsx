import React from 'react';

import CustCard from '../../components/CustCard/CustCard.component';

const TestPage = () => {
  return (
    <div>
      <h1>About</h1>
      <CustCard>
        This project was initially created as just a weather app. However, I
        wanted the ability to search for different locations weather, as well.
      </CustCard>
    </div>
  );
};

export default TestPage;
