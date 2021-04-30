import React from 'react'
import {SidebarContainer, 
  Icon, 
  CloseIcon, 
  SidebarWrapper, 
  SidebarMenu, 
  SidebarLink, 
  SideBtnWrap, 
  SidebarRouter, } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}>About</SidebarLink> 
          <SidebarLink to='discover' onClick={toggle}>Discover</SidebarLink> 
          <SidebarLink to='plans' onClick={toggle}>Plans</SidebarLink> 
          <SidebarLink to='signup' onClick={toggle}>Sign Up</SidebarLink> 
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRouter to="/signin">Sign in</SidebarRouter>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
};

export default Sidebar;
