import React, { useContext, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import { LocationContext } from '../../Context/LocationContext';

// import { Spinner } from 'reactstrap';

function MapContainer() {
  const [loc, setLoc] = useContext(LocationContext);

  const getInitialLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (pos) {
        const lat2 = pos.coords.latitude;
        const lng2 = pos.coords.longitude;
        setLoc({ lat: lat2, lng: lng2 });
      });
    }
  };

  // useEffect(() => {
  //   getInitialLocation();
  // });

  return (
    <div className='mapcontainer'>
      <h3>CurLoc: {loc.foradd}</h3>
      <button onClick={getInitialLocation}>Get Loc</button>
      <LoadScript
        googleMapsApiKey='AIzaSyBzsDMLmaZ91T06pJfGu_6iqT2OW45w4LQ'
        googleMapsClientId='899476668967-dvt8f7rdo7k8kc8ao30cmuqrrlhuinoc.apps.googleusercontent.com'
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
