import React, { createContext, useMemo, useState } from 'react';

export const WeatherContext = createContext();

export function WeatherProvider(props) {
  const [weather, setWeather] = useState({
    latitude: '',
    longitude: '',
    timezone: '',
    currently: {},
    minutely: {},
    hourly: {},
    daily: {},
    flags: {},
  });
  const value = useMemo(() => [weather, setWeather], [weather]);
  return (
    <WeatherContext.Provider value={value}>
      {props.children}
    </WeatherContext.Provider>
  );
}
