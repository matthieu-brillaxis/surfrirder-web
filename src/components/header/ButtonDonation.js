/* eslint-disable */

import React, { Component } from 'react';
import styled from 'styled-components';

class ButtonDonation extends Component {
  render() {
    const ButtonDonation = styled.a`
      background-color: #3BA9BC;
      border-radius: 10px;
      color: white;
      text-transform: uppercase;
      text-align: center;
      display: flex;
      align-items: center;
      padding: 10px 5px;
      font-size: 0.8em;
      height: 24px;
    `;
  
    return (
      <ButtonDonation>Faire un don</ButtonDonation>
    );
  }
}

export default ButtonDonation;
