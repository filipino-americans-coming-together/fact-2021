import React from 'react';
import { Image } from 'react-bootstrap';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 2em;
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const Footer = () => (
  <StyledFooter className="text-center fontOpenSans phthalo-green-bkg">
    <Image
      src={`${process.env.PUBLIC_URL}/img/psa-logo.png`}
      className={`animated fadeIn`}
      style={{
        height: '10rem',
      }}
    />
    <p className="text-light">
      Organized by the Philippine Student Association at the University of
      Illinois at Urbana-Champaign.
      <br />
      Questions? Interested in sponsoring? Email us at{' '}
      <a href="mailto:fact@psauiuc.org?subject=Mail from Our Site">
        fact@psauiuc.org
      </a>
    </p>
  </StyledFooter>
);

export default Footer;
