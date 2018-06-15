/* eslint-disable */

import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

class Cover extends Component {
  render() {
    const Cover = styled.div`
    width: 100%;
    height: 280px;
    background-color: #EEE7E3;
    padding: 20px;
    `;

    const H1 = styled.h1`
    color: #176779;
    text-transform: uppercase;
    `;

    const Subtitle = styled.div`
    color: #3ba9bc;
    `;

    return (
      <Cover>
        <H1>{ this.props.title }</H1>
        <Subtitle>{ this.props.subtitle }</Subtitle>
      </Cover>
    );
  }
}

export default Cover;
