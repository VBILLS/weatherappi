import React, { createContext, useMemo, useState } from 'react';

export const LocationContext = createContext();

export function LocationProvider(props) {
  const [loc, setLoc] = useState({
    lat: 44.4758442,
    lng: -73.212121,
    foradd: 'Burlington, VT 05401, USA',
    address_components: [],
  });

  const value = useMemo(() => [loc, setLoc], [loc]);
  return (
    <LocationContext.Provider value={value}>
      {props.children}
    </LocationContext.Provider>
  );
}
