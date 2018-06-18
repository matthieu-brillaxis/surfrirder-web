/* eslint-disable */

import React, { Component } from 'react';
import styled from 'styled-components';
import ListeDeroulante from './ListeDeroulante'
import transition from './../../assets/vague_transition4.png';
import plongeur from './../../assets/img/plongeur.png';
import fish from './../../assets/img/poisson_lanterne.png';
import bubble3 from './../../assets/img/bulle3.png';
import bubble4 from './../../assets/img/bulle4.png';

class DarkBlueBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: false
    };
  }


  render() {
    const DarkBlueBlock = styled.div`
      display: flex;
      flex-direction: column;
      background-color: #0B3E49;
      width: 100%;
      position:relative;
      padding: 30px 40px 150px 40px;

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

      &:after {
        content:url(${plongeur});
        overflow: visible;
        position: absolute;
        background-color: transparent;
        width:100%;
        bottom:8px;
        text-align:right;
        padding-right:96px;
        right:0px;
      };
    `;

    const H1 = styled.h1`
    color: white;
    text-transform: uppercase;
    margin-bottom: 0px;
    text-align: left;
    `;

    const Subtitle = styled.p`
    color: #94DAE8;
    text-align: left;
    `;

    const Fish = styled.img`
      position: absolute;
      top: -60px;
      right: 20%;
    `;

    const DuoBubble = styled.img`
      position: absolute;
      top: 0px;
      left: 20%;
    `;

    const SimpleBubble = styled.img`
      position: absolute;
      top: -20px;
      left: 10%;
    `;

    return (
      <DarkBlueBlock>
      <Fish src={fish} />
      <DuoBubble src={bubble3} />
      <SimpleBubble src={bubble4} />
        <H1>{ this.props.data.titre }</H1>
        <Subtitle dangerouslySetInnerHTML={{ __html: this.props.data.sous_titre }} />
         { this.props.data.liste_deroulante.map((prop, key) => {
          return (
            <ListeDeroulante key={key} data={prop}/>
          );
         })}
      </DarkBlueBlock>
    );
  }
}

export default DarkBlueBlock;
