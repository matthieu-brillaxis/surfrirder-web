import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

class RoundImage extends Component {
  render() {
    const RoundImage = styled.img`
      border-radius:50%;
      border:1px solid black;
    `;


    return (
      <RoundImage>
      </RoundImage>
    );
  }
}

export default RoundImage;
