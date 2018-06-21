import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import transition from './../../assets/vague_transition1.png';
import transition2 from './../../assets/vague_transition2.png';

class WhiteBlock extends PureComponent {
  render() {
    const WhiteBlockContainer = styled.div`
      display:flex;
      flex-direction:column;
      flex-wrap:wrap;
      justify-content:center;
      position:relative;
      padding: 20px;

      &:before {
        content:'';
        height:100px;
        width:100%;
        background:url(${transition});
        background-size: cover;
        overflow: visible;
        position: absolute;
        top: -100px;
        left: 0;
        background-color: transparent;
      }

      &:after {
        content:'';
        height:100px;
        width:100%;
        background:url(${transition2});
        background-size: cover;
        overflow: visible;
        position: absolute;
        bottom: -100px;
        left: 0;
        background-color: transparent;
        z-index:99;
      }
    `;

    const P = styled.p`
      color: #3BA9BC;
    `;

    return (
      <WhiteBlockContainer>
        <P>{ this.props.text }</P>
      </WhiteBlockContainer>
    );
  }
}

WhiteBlock.propTypes = {
  text: PropTypes.string.isRequired,
};

export default WhiteBlock;
