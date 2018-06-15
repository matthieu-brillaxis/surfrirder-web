/* eslint-disable */

import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button';

class ActionBlock extends Component {
  render() {
    const ActionBlock = styled.div`
    width: 100%;
    padding: 20px;
    `;

    const H1 = styled.h1`
    color: white;
    text-transform: uppercase;
    margin-bottom: 0px;
    text-align: center;
    `;

    const Subtitle = styled.div`
    color: white;
    text-align: center;
    `;

    return (
      <ActionBlock>
        <H1>{ this.props.title }</H1>
        <Subtitle>{ this.props.subtitle }</Subtitle>
        { this.props.buttonTitle &&  
         <Button buttonTitle={this.props.buttonTitle}></Button>
        }
      </ActionBlock>
    );
  }
}

export default ActionBlock;
