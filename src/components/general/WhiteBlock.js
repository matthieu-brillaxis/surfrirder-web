/* eslint-disable */

import React, { Component } from 'react';
import styled from 'styled-components';
import transition from './../../assets/vague_transition1.png';

class WhiteBlock extends Component {
  render() {
    const WhiteBlock = styled.div`
    width: 100%;
    padding: 20px;
    `;

    const P = styled.p`
    color: #176779;
    `;

    return (
      <WhiteBlock>
      <img src={transition}/>
      <P>{ this.props.text }</P>
      </WhiteBlock>
    );
  }
}

export default WhiteBlock;
