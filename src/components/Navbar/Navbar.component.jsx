import React from 'react';

const Navbar = ({ getLocation, handleGetWeather }) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-info'>
      <h1 className='navbar-brand'>Weather App!!</h1>
      <div className='btn-group'>
        <button className='btn btn-secondary' onClick={getLocation}>
          Get Location
        </button>
        <button
          className='btn btn-secondary load-weather'
          onClick={handleGetWeather}
        >
          Load your Weather <i className='fas fa-thermometer-quarter'></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
