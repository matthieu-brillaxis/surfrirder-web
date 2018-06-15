/* eslint-disable */

import React, { Component } from 'react';
import styled from 'styled-components';
import ActionBlock from './ActionBlock'

class WaterBlock extends Component {
  render() {
    const WaterBlock = styled.div`
      display: inline-block;
      background-color: #3BA9BC;
      width: 100%;
      padding: 100px 0;
    `;
  
    return (
      <WaterBlock>
      {this.props.data.map((prop, key) => {
        return (
          <ActionBlock key={key} title={prop.titre} subtitle={prop.sous_titre} buttonTitle={prop.bouton_label}></ActionBlock>
        );
     })}
      </WaterBlock>
    );
  }
}

export default WaterBlock;
