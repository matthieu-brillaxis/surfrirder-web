/* eslint-disable */

import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import turtle from '../../assets/img/tortue.png';

class Cover extends Component {
  render() {
    const Cover = styled.div`
      width: 100%;
      background-color: #EEE7E3;
      padding: 20px;
      padding-bottom: 90px;
    `;

    const H1 = styled.h1`
      color: #176779;
      text-transform: uppercase;
    `;

    const Subtitle = styled.div`
      color: #3ba9bc;
      font-size: 0.9em;
    `;

    const Icon = styled.img`
      display:inline-block;
    `;

    const LeftDiv = styled.div`
      display:inline-block;
      width:60%;
      margin-right:40px;
    `;

    return (
      <Cover>
        <LeftDiv>
          <H1>{ this.props.title }</H1>
          <Subtitle>{ this.props.subtitle }</Subtitle>
        </LeftDiv>
        <Icon src={turtle} />
      </Cover>
    );
  }
}

export default Cover;
