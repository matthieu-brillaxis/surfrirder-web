/* eslint-disable */

import React, { Component } from 'react';
import styled from 'styled-components';

class Button extends Component {
  render() {
    const Button = styled.div`
      background-color:#10677a;
      color:white;
      padding:16px;
      border-radius:32px;
      text-transform:uppercase;
      margin:16px auto 16px auto;
      width:50%;
      font-size: 11px;
      text)-align: center;
    `;
  
    return (
      <Button>{ this.props.buttonTitle }</Button>
    );
  }
}

export default Button;
