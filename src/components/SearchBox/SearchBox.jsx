import React, { useState } from 'react';

import { Button, Input, InputGroup } from 'reactstrap';

function SearchBox() {
  const [searchField, setSearchField] = useState('');

  const onSearch = () => {
    const apiKey = 'AIzaSyBzsDMLmaZ91T06pJfGu_6iqT2OW45w4LQ';

    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${searchField}&key=${apiKey}`
    )
      .then(res => res.json())
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(err => console.log(err));
  };

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  return (
    <InputGroup id='address-search'>
      <Input
        name='address-value'
        onChange={handleChange}
        placeholder='Enter your Zip'
      />
      <Button onClick={onSearch} outline color='success'>
        Search
      </Button>
    </InputGroup>
  );
}
export default SearchBox;
