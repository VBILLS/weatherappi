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

// const useFetchWeather = useEffect(() => {
//   function fetchWeatherData(lat, lng) {
//     const proxy = 'https://cors-anywhere.herokuapp.com/';
//     setIsLoading(true);
//     fetch(
//       `${proxy}https://api.darksky.net/forecast/64ba8a3916e562da1c3038e0e454a0e8/${lat},${lng}`,
//       {
//         method: 'GET',
//         headers: new Headers({
//           Accept: 'application/json',
//         }),
//       }
//     )
//       .then((res) => res.json())
//       .then((weathData) => {
//         setWeather(weathData);
//         setIsLoading(false);
//         console.log(weathData);
//       })
//       .catch((err) => console.error);
//   }
// }, [loc])
