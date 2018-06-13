import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const Title = styled.h1`
      font-size: 1.5em;
      text-align: center;
    `;

    const TopBar = styled.div`
      background-color:black;
      height:75px;
    `;

    const ButtonDonation = styled.button`
      background-color:blue;
    `;

    return (
      <header className="header">
        <TopBar>
          <ButtonDonation>Faire un don</ButtonDonation>
        </TopBar>
        <Title>{ this.props.title }</Title>
      </header>
    );
  }
}

export default connect(null, null)(Header);
