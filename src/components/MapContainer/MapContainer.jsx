import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// import { Spinner } from 'reactstrap';

function MapContainer() {
  const myloc = {
    lat: 44.4514707,
    lng: -73.1758952
  };

  return (
    <div className='mapcontainer' style={{ height: '400px', width: 'auto' }}>
      <h1>MAP</h1>
      <LoadScript
        googleMapsApiKey='AIzaSyBzsDMLmaZ91T06pJfGu_6iqT2OW45w4LQ'
        googleMapsClientId='899476668967-dvt8f7rdo7k8kc8ao30cmuqrrlhuinoc.apps.googleusercontent.com'
        onError={err => console.error()}
      >
        <GoogleMap
          id='weather-loc-map'
          mapContainerStyle={{
            height: '400px',
            width: '600px'
          }}
          zoom={10}
          center={myloc}
        >
          <Marker position={myloc}></Marker>
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default MapContainer;
