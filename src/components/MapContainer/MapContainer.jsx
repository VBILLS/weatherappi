import React, { useContext, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, Data } from '@react-google-maps/api';

import { LocationContext } from '../../Context/LocationContext';

// import { Spinner } from 'reactstrap';

import './MapContainer.styles.scss';

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
          setLoc(
            {
              lat: res.results[0].geometry.location.lat,
              lng: res.results[0].geometry.location.lng,
              foradd: res.results[4].formatted_address,
              address_components: res.results,
            },
            () => console.log('setLoc', loc)
          )
        )
        .catch((err) => console.log(err));
    });
  }, []);

  const center = {
    lat: loc.lat,
    lng: loc.lng,
  };

  const onMarkerMove = (e) => {
    console.log('marker e', e);
  };

  return (
    <div className='mapcontainer'>
      <strong>{loc.foradd}</strong>
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_API_KEY}
        googleMapsClientId={process.env.REACT_APP_CLIENT_KEY}
        onError={(err) => console.error()}
      >
        <GoogleMap id='weather-loc-map' zoom={10} center={center}>
          <Marker
            onDragEnd={onMarkerMove}
            position={loc}
            clickable={true}
            draggable={true}
          ></Marker>
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default MapContainer;
