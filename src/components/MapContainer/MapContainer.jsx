import React, { useContext } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import { LocationContext } from '../../Context/LocationContext';

// import { Spinner } from 'reactstrap';

function MapContainer() {
  const [loc] = useContext(LocationContext);

  return (
    <div className='mapcontainer'>
      <h3>{loc.foradd}</h3>
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_API_KEY}
        googleMapsClientId={process.env.REACT_APP_CLIENT_KEY}
        onError={(err) => console.error()}
      >
        <GoogleMap
          id='weather-loc-map'
          mapContainerStyle={{
            height: '300px',
            width: '300px',
          }}
          zoom={10}
          center={loc}
        >
          <Marker position={loc}></Marker>
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default MapContainer;
