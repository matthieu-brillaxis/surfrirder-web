/* eslint-disable */

import React, { Component } from 'react';
import styled from 'styled-components';

class ButtonDonation extends Component {
  render() {
    const ButtonDonation = styled.a`
      background-color: #2f80ed;
      color: white;
      text-transform: uppercase;
      text-align: center;
      width: 115px;
      height: 100%;
      display: inline-block;
    `;
  
    return (
      <ButtonDonation>Faire un don</ButtonDonation>
    );
  }
}

export default ButtonDonation;
