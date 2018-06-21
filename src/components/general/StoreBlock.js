/* eslint-disable */

import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button';
import calamar from '../../assets/img/calamar.png';
import transition from './../../assets/vague_transition4.png';

class StoreBlock extends Component {
  render() {
    const StoreBlock = styled.div`
      width: 100%;
      padding: 20px;
      display: flex;
      flex-direction: column;
      z-index:0;
      background-color:rgba(7,62,75,1);
      padding-bottom:160px;
      padding-top:80px;
      position:relative;

      &:after {
        content: '';
        height: 100px;
        width: 50%;
        background: url(${calamar});
        background-size: cover;
        overflow: visible;
        position: absolute;
        bottom: 40px;
        background-color: transparent;
      };

      &:before {
        content:'';
        height:40px;
        width:100%;
        background:url(${transition}) no-repeat;
        background-size: cover;
        overflow: visible;
        position: absolute;
        top: -40px;
        left: 0;
        background-color: transparent;
      }
    `;

    const H1 = styled.h1`
      color: white;
      text-transform: uppercase;
      text-align: left;
      font-size: 18px;
      font-weight:bold;
      margin-bottom:32px;
    `;

    const Subtitle = styled.div`
      color: rgba(145,218,233,1);
      text-align: left;
      font-size:12px;
      margin-bottom:32px;
    `;

    return (
      <StoreBlock>
        <H1>{ this.props.title }</H1>
        <Subtitle>{ this.props.subtitle }</Subtitle> 
         <Button buttonTitle={this.props.label}></Button>
      </StoreBlock>
    );
  }
}

export default StoreBlock;
