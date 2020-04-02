import React, { createContext, useMemo, useState } from 'react';

export const LocationContext = createContext();

export function LocationProvider(props) {
  const [loc, setLoc] = useState({ lat: 0, lng: 0 });
  const value = useMemo(() => [loc, setLoc], [loc]);
  return (
    <LocationContext.Provider value={value}>
      {props.children}
    </LocationContext.Provider>
  );
}
// export const LocationConsumer = LocationContext.Consumer;
