import React, { useContext, useState } from 'react';

import { LocationContext } from '../../Context/LocationContext';

import { Button } from 'reactstrap';

function GetWeatherButton({ handleGetWeatherbyDeviceLoc }) {
  const [loc, setLoc] = useContext(LocationContext);

  return (
    <Button onClick={handleGetWeatherbyDeviceLoc}>
      Get Weather <i className='fas fa-thermometer-quarter'></i>
    </Button>
  );
}

export default GetWeatherButton;
