import React from 'react'
import {
  FooterContainer, 
  FooterLink, 
  FooterLinksContainer,
   FooterLinksItems, 
   FooterLinksWrapper, 
   FooterLinkTitle, 
   FooterWrap } from './footerElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
                <FooterLink to="/signin">How it works</FooterLink>
                <FooterLink to="/signin">Plans</FooterLink>
                <FooterLink to="/signin">Careers on phonia</FooterLink>
                <FooterLink to="/signin">Contact</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to="/signin">Instagram</FooterLink>
                <FooterLink to="/signin">Facebook</FooterLink>
                <FooterLink to="/signin">Twitter</FooterLink>
                <FooterLink to="/signin">TikTok</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>Contact us</FooterLinkTitle>
                <FooterLink to="/signin">Email</FooterLink>
                <FooterLink to="/signin">Phone</FooterLink>
                <FooterLink to="/signin">Support</FooterLink>
                <FooterLink to="/signin">FAQ</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>SiteMap</FooterLinkTitle>
                <FooterLink to="/signin">About us</FooterLink>
                <FooterLink to="/signin">Discover</FooterLink>
                <FooterLink to="/signin">Plans</FooterLink>
                <FooterLink to="/signin">Sign Up</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      
      
      </FooterWrap>
      
    </FooterContainer>
  )
}

export default Footer
