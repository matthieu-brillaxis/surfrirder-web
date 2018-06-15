/* eslint-disable */

import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './../../assets/logo_surfrider.png';

class Logo extends Component {
  render() {
    const Logo = styled.div`
      display: inline-block;
    `;
  
    return (
      <Logo><img src={logo}/></Logo>
    );
  }
}

export default Logo;
