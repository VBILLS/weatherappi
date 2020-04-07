import React, { useContext, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import { LocationContext } from '../../Context/LocationContext';

// import { Spinner } from 'reactstrap';

function MapContainer() {
  const [loc, setLoc] = useContext(LocationContext);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const apiKey = process.env.REACT_APP_API_KEY;
      fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${pos.coords.latitude},${pos.coords.longitude}&key=${apiKey}`
      )
        .then((res) => res.json())
        .then((res) =>
          setLoc({
            lat: res.results[0].geometry.location.lat,
            lng: res.results[0].geometry.location.lng,
            foradd: res.results[4].formatted_address,
            address_components: res.results,
          })
        )
        .catch((err) => console.log(err));
    });
  }, []);

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
