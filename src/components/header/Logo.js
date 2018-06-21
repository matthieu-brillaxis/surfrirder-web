import React from 'react';
import styled from 'styled-components';
import logo from './../../assets/logo_surfrider.png';

const LogoContainer = styled.div`
  display: inline-block;
`;

const Logo = () => (
  <LogoContainer><img src={logo} alt="logo" /></LogoContainer>
);

export default Logo;
