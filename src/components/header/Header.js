/* eslint-disable */

import React, { Component } from 'react';
import styled from 'styled-components';
import ButtonDonation from './ButtonDonation';
import Logo from './Logo';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const Header = styled.header`
      background-color:black;
      height:40px;
      display: flex;
      justify-content: space-between;
    `;

    return (
      <Header>
        <Logo />
        <ButtonDonation />
      </Header>
    );
  }
}

export default connect(null, null)(Header);
