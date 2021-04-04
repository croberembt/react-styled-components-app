import React from 'react';
import { Container, Logo, Menu, MenuItem } from './NavbarStyles';

const Navbar: React.FC = () => {
  return (
    <>
      <Container>
        <Logo>LOGO</Logo>
        <Menu>
          <MenuItem>HOME</MenuItem>
          <MenuItem>ABOUT</MenuItem>
          <MenuItem>CONTACT</MenuItem>
        </Menu>
      </Container> 
    </>
  )
}

export default Navbar; 