/* eslint-disable */

import React, { Component } from 'react';
import styled from 'styled-components';
import transition from './../../assets/vague_transition1.png';
import transition2 from './../../assets/vague_transition2.png';

class WhiteBlock extends Component {
  render() {
    const WhiteBlock = styled.div`
      display:flex;
      flex-direction:column;
      flex-wrap:wrap;
      justify-content:center;
      position:relative;
      padding: 20px;

      &:before {
        content:'';
        height:70px;
        width:100%;
        background:url(${transition});
        background-size: cover;
        overflow: visible;
        position: absolute;
        top: -68px;
        left: 0;
        background-color: transparent;
      }

      &:after {
        content:'';
        height:85px;
        width:100%;
        background:url(${transition2});
        background-size: cover;
        overflow: visible;
        position: absolute;
        bottom: -85px;
        left: 0;
        background-color: transparent;
      }
    `;

    const P = styled.p`
    color: #176779;
    `;

    return (
      <WhiteBlock>
      <P>{ this.props.text }</P>
      </WhiteBlock>
    );
  }
}

export default WhiteBlock;
