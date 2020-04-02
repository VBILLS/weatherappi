import React, { useState } from 'react';
import { LocationContext } from './LocationContext';

export function handleGetDeviceCoords() {
  const [loc, setLoc] = useState({});

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(pos) {
      const lat2 = pos.coords.latitude;
      const lng2 = pos.coords.longitude;
      setLoc({ lat: lat2, lng: lng2 });
    });
  }

  return <div className='handleGetDeviceCoords-div'>{loc}</div>;
}
