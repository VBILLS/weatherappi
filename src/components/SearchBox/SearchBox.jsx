import React, { useState, useContext } from 'react';
import { LocationContext } from '../../Context/LocationContext';

import { Button, Input, InputGroup, Label } from 'reactstrap';

function SearchBox() {
  const [searchField, setSearchField] = useState('');
  const [loc, setLoc] = useContext(LocationContext);

  const setLatLngBySearch = e => {
    e.preventDefault();
    setSearchField(e.target.value);
    const apiKey =
      process.env.API_KEY || 'AIzaSyBzsDMLmaZ91T06pJfGu_6iqT2OW45w4LQ';

    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${searchField}&key=${apiKey}`
    )
      .then(res => res.json())
      .then(
        res => console.log(res)
        // setLoc({
        //   lat: res.results[0].geometry.location.lat,
        //   lng: res.results[0].geometry.location.lng
        // })
      )
      .catch(err => console.log(err));
  };

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  return (
    <InputGroup id='address-search'>
      <Label for='address-value'>
        current lat/lng: {loc.lat},{loc.lng}
      </Label>
      <Input
        name='address-value'
        onChange={handleChange}
        placeholder='Search your Address'
        value={searchField}
      />
      <Button onClick={setLatLngBySearch} outline color='success'>
        Search
      </Button>
    </InputGroup>
  );
}
export default SearchBox;
