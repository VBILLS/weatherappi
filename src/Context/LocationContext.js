import React, { createContext, useMemo, useState, useReducer } from 'react';

export const LocationContext = createContext();

export function LocationProvider(props) {
  const [loc, setLoc] = useState({
    lat: 44,
    lng: -73,
    foradd: 'Current Location...',
    address_components: [],
  });

  const value = useMemo(() => [loc, setLoc], [loc]);
  return (
    <LocationContext.Provider value={value}>
      {props.children}
    </LocationContext.Provider>
  );
}

//dispatch action to update state for location after lat/lng update
// const [state, dispatch] = useReducer(reducer, { loc });
// function reducer(state, action) {
//   switch (action.type) {
//     case 'update':
//       return {
//         ...loc,
//         fradd: formatted_address,
//         address_components: address_components,
//       };
//     default:
//       console.log('default action...?');
//   }
// }
