import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonDonationContainer = styled(Link)`
      background-color: #3BA9BC;
      border-radius: 18px;
      color: white;
      text-transform: uppercase;
      text-align: center;
      padding: 16px;
      font-size: 0.8em;
      height: 24px;
      text-decoration:none;
      line-height:4px;
    `;

const ButtonDonation = () => (
  <ButtonDonationContainer to="/faire-un-don">Faire un don</ButtonDonationContainer>
);

export default ButtonDonation;
