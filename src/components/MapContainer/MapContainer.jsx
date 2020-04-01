import React, { useCallback } from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

import { Spinner } from 'reactstrap';

function MapContainer() {
  const options = {
    uluru: { lat: -25.344, lng: 131.036 },
    zoom: 8
  };
  return (
    <div className='mapcontainer' style={{ height: '400px', width: 'auto' }}>
      <h1>MAP</h1>
    </div>
  );
}

export default MapContainer;
