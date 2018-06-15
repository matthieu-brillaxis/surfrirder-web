/* eslint-disable */

import React, { Component } from 'react';
import styled from 'styled-components';
import ButtonDonation from './ButtonDonation';
import Logo from './Logo';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const Header = styled.header`
      background-color: #EEE7E3;
      height:40px;
      display: flex;
      justify-content: space-around;
      padding-top: 10px;
    `;

    const BurgerButton = styled.div`
      width: 100px;
    `;

    return (
      <Header>
        <Logo />
        <BurgerButton />
        <ButtonDonation />
      </Header>
    );
  }
}

export default connect(null, null)(Header);
