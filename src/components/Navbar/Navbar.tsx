import React from 'react';
import { Container } from './NavbarStyles';
import { Logo } from './NavbarStyles';
import { Menu } from './NavbarStyles';

const Navbar: React.FC = () => {
  return (
    <>
      <Container>
          <Logo></Logo>
          <Menu></Menu>
      </Container> 
    </>
  )
}

export default Navbar; 