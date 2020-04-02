import React, { createContext, useMemo, useState } from 'react';

export const LocationContext = createContext();

export function LocationProvider(props) {
  const [loc, setLoc] = useState({});
  const value = useMemo(() => [loc, setLoc], [loc]);
  return <LocationContext.Provider value={value} {...props} />;
}
// export const LocationConsumer = LocationContext.Consumer;
