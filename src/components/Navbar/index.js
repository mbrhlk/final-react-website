import React from 'react';
import {FaBars} from 'react-icons/fa'
import {
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
  NavBtn,
  NavBtnLinks, } from './NavbarElements'

const Navbar = ({toggle}) => {
  return (
   <>
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>phonia.</NavLogo>
        <MobileIcon onClick={toggle}>
        <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to= "about">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to= "discover">Discover</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to= "plans">Plans</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to= "signup">Sign up</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLinks to="/signin">Sign In</NavBtnLinks>
        </NavBtn>
      </NavbarContainer>
    </Nav>
   </>
  );
};


export default Navbar;