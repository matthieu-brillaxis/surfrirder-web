/* eslint-disable */

import React, { Component } from 'react';
import styled from 'styled-components';
import ButtonDonation from './ButtonDonation';
import Logo from './Logo';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {display: false};
  }

  handleClick = (event) => {
    this.setState({display: !this.state.display});
  };

  render() {
    const Header = styled.header`
      background-color: #EEE7E3;
      height:40px;
      display: flex;
      justify-content: space-around;
      padding-top: 10px;
    `;

    const BurgerButton = styled.div`
    `;

    const BurgerButtonBarre = styled.div`
    width: 25px;
    height: 3px;
    background-color: #176779;
    margin: 4px 0;
    `;

    return (
      <Header>
        <Logo />
        <BurgerButton onClick={this.handleClick}>
          <BurgerButtonBarre/>
          <BurgerButtonBarre/>
          <BurgerButtonBarre/>
        </BurgerButton>
        <ButtonDonation />
      </Header>
    );
  }
}

export default connect(null, null)(Header);
