import React, { useState } from 'react';

import GetWeatherButton from '../GetWeatherButton/GetWeatherButton';
import SearchBox from '../SearchBox/SearchBox';

import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavbarToggler,
  NavbarText,
} from 'reactstrap';

import './Header.styles.scss';

const Header = ({ handleGetWeatherbyDeviceLoc }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color='dark' dark expand='md'>
      <NavbarBrand className='text-light'>Weather App</NavbarBrand>
      <NavbarToggler onClick={toggle} className='mr-2' />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar>
          <NavItem className='mr-2'>
            <NavbarText>Hourly</NavbarText>
          </NavItem>
          <NavItem>
            <NavbarText>Daily</NavbarText>
          </NavItem>
        </Nav>
        <Nav className='ml-auto' navbar>
          <NavItem>
            <SearchBox />
          </NavItem>
          <NavItem className='ml-2'>
            <GetWeatherButton
              handleGetWeatherbyDeviceLoc={handleGetWeatherbyDeviceLoc}
            />
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
