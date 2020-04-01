import React, { useState } from 'react';
import {
  Button,
  Collapse,
  Input,
  InputGroup,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavbarToggler,
  NavbarText
} from 'reactstrap';

import './Header.styles.scss';

const Header = ({ handleGetWeather }) => {
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
            <InputGroup>
              <Input placeholder='Enter your Zip' />
              <Button disabled outline color='success'>
                Search
              </Button>
            </InputGroup>
          </NavItem>
          <NavItem className='ml-2'>
            <Button onClick={handleGetWeather}>
              Get Weather <i className='fas fa-thermometer-quarter'></i>
            </Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
