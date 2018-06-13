/* eslint-disable */

import React, { Component } from 'react';
import styled from 'styled-components';

class Button extends Component {
  render() {
    const Button = styled.div`
    border: 1px solid #2F80ED;
    `;
  
    return (
      <Button>{ this.props.buttonTitle }</Button>
    );
  }
}

export default Button;
