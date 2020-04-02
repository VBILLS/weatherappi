import React, { useState } from 'react';

import { LocationProvider } from '../../Context/LocationContext.js';
import { handleGetDeviceCoords } from '../../Context/handleGetDeviceCoords.js';

import { Button, Input, InputGroup } from 'reactstrap';

function SearchBox() {
  const [searchField, setSearchField] = useState('');

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  return (
    <LocationProvider>
      <InputGroup id='address-search'>
        <Input
          name='address-value'
          onChange={handleChange}
          placeholder='Enter your Zip'
        />
        <Button onClick={handleGetDeviceCoords} outline color='success'>
          Search
        </Button>
      </InputGroup>
    </LocationProvider>
  );
}
export default SearchBox;
