/* eslint-disable */

import React, { Component } from 'react';
import styled from 'styled-components';

class Logo extends Component {
  render() {
    const Logo = styled.div`
      background-color: #C4C4C4;
      display: inline-block;
      width: 110px;
      height: 110px;
      margin-left: 20px;
    `;
  
    return (
      <Logo></Logo>
    );
  }
}

export default Logo;
