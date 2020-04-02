import React, { useState, useEffect } from 'react';

function handleGetDeviceCoords() {
  const [loc, setLoc] = useState(null);
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(pos) {
        const lat2 = pos.coords.latitude;
        const lng2 = pos.coords.longitude;
        setLoc({ lat: lat2, lng: lng2 });
      });
    }
  };

  return (
    <Location
    <div className='handleGetDeviceCoords-div'>
      <p>
        Lat: {loc.lat} - Lng: {loc.lng}
      </p>
    </div>
  );
}
export default handleGetDeviceCoords;
