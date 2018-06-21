import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';

class ActionBlock extends PureComponent {
  render() {
    const ActionBlockContainer = styled.div`
      width: 100%;
      padding: 20px;
      display: flex;
      flex-direction: column;
      z-index:5;
    `;

    const Icone = styled.div`
    text-align: center;
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
      <ActionBlockContainer>
        <Icone><img src={this.props.icone} alt="icone" /></Icone>
        <H1>{ this.props.title }</H1>
        <Subtitle>{ this.props.subtitle }</Subtitle>
        { this.props.buttonTitle &&
        <Button buttonTitle={this.props.buttonTitle} />
        }
      </ActionBlockContainer>
    );
  }
}

ActionBlock.propTypes = {
  icone: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
};

export default ActionBlock;
