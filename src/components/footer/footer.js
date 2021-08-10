import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us </FooterLinkTitle>
              <FooterLink to="/signup">How it works</FooterLink>
              <FooterLink to="/signup">Testimonials</FooterLink>
              <FooterLink to="/signup">Careers</FooterLink>
              <FooterLink to="/signup">Investors</FooterLink>
              <FooterLink to="/EasterEgg">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/signup">Instagram</FooterLink>
              <FooterLink to="/signup">Facebook</FooterLink>
              <FooterLink to="/signup">Youtube</FooterLink>
              <FooterLink to="/signup">Twitter</FooterLink>
              <FooterLink to="/signup">GitHub</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us </FooterLinkTitle>
              <FooterLink to="/signup">Contact</FooterLink>
              <FooterLink to="/signup">Support</FooterLink>
              <FooterLink to="/signup">Customer Service</FooterLink>
              <FooterLink to="/signup">Sponserships</FooterLink>
              <FooterLink to="/signup">Location</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Careers</FooterLinkTitle>
              <FooterLink to="/signup">Internship Program</FooterLink>
              <FooterLink to="/signup">Careers Portal</FooterLink>
              <FooterLink to="/signup">Day in the Life</FooterLink>
              <FooterLink to="/signup">Ads on InSync</FooterLink>
              <FooterLink to="/signup">Become an InSync Partner</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
