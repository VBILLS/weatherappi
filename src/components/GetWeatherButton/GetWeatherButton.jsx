import React from 'react';

import { Button } from 'reactstrap';

function GetWeatherButton({ handleGetWeatherbyDeviceLoc }) {
  return (
    <Button onClick={handleGetWeatherbyDeviceLoc}>
      Get Weather <i className='fas fa-thermometer-quarter'></i>
    </Button>
  );
}

export default GetWeatherButton;
