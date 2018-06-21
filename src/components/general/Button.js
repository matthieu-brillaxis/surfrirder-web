import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Button extends PureComponent {
  render() {
    const ButtonContainer = styled.div`
      background-color:#10677a;
      color:white;
      padding:16px;
      border-radius:32px;
      text-transform:uppercase;
      margin:16px auto 16px auto;
      font-size: 11px;
      text-align: center;
    `;

    return (
      <ButtonContainer>{ this.props.buttonTitle }</ButtonContainer>
    );
  }
}

Button.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
};

export default Button;
