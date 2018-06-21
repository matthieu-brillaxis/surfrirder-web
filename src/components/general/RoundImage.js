import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class RoundImage extends PureComponent {
  render() {
    const RoundImageContainer = styled.img`
      border-radius:50%;
      border:1px solid transparent;
    `;


    return (
      <RoundImageContainer src={this.props.url} />
    );
  }
}

RoundImage.propTypes = {
  url: PropTypes.string.isRequired,
};

export default RoundImage;
