import React, { useState, useContext } from 'react';
import { LocationContext } from '../../Context/LocationContext';

import { Button, Input, InputGroup } from 'reactstrap';

function SearchBox() {
  const [searchField, setSearchField] = useState('');
  const [loc, setLoc] = useContext(LocationContext);

  const setLatLngBySearch = (e) => {
    e.preventDefault();
    setSearchField(e.target.value);
    const apiKey = process.env.REACT_APP_API_KEY;

    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${searchField}&key=${apiKey}`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 'OK') {
          const info = res.results[0];
          setLoc({
            lat: info.geometry.location.lat,
            lng: info.geometry.location.lng,
            foradd: info.formatted_address,
            address_components: info.address_components,
          });
          console.log('res-after-setLoc', res);
        } else {
          console.log(res.status);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <InputGroup id='address-search'>
      <Input
        name='address-value'
        onChange={handleChange}
        placeholder='Search your Address'
        value={searchField}
      />
      <Button onClick={setLatLngBySearch} outline color='success'>
        Search <i className='fas fa-search-location'></i>
      </Button>
    </InputGroup>
  );
}
export default SearchBox;
