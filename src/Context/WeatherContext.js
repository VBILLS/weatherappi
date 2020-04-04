import React, { createContext, useMemo, useState } from 'react';

export const WeatherContext = createContext();

export function LocationProvider(props) {
  const [weather, setWeather] = useState({});
  const value = useMemo(() => [weather, setWeather], [weather]);
  return (
    <LocationContext.Provider value={value}>
      {props.children}
    </LocationContext.Provider>
  );
}
