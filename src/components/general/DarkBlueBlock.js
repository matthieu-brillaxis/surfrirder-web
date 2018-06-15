/* eslint-disable */

import React, { Component } from 'react';
import styled from 'styled-components';
import '../../assets/css/transition.css'
import { CSSTransitionGroup } from 'react-transition-group';

class DarkBlueBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: false
    };
  }

  handleClick = (event) => {
    this.setState({ showList: !this.state.showList });
  };

  render() {
    const DarkBlueBlock = styled.div`
      display: flex;
      flex-direction: column;
      background-color: #0B3E49;
      width: 100%;
      padding: 100px 40px;
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

    const ListeDeroulante = styled.div`
    `;

    const Title = styled.h4`
      color: white;
      border-bottom: 1px solid white;
      text-transform: uppercase;
      display: flex;
      justify-content: space-between;
    `;

    const Description = styled.div`
      color: white;
    `;

    return (
      <DarkBlueBlock>
        <H1>{ this.props.data.titre }</H1>
        <Subtitle dangerouslySetInnerHTML={{ __html: this.props.data.sous_titre }} />
         { this.props.data.liste_deroulante.map((prop, key) => {
          return (
            <ListeDeroulante key={key}>
              <Title>{ prop.titre }<span onClick={this.handleClick}>+</span></Title>
              <CSSTransitionGroup
                transitionName="slide"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
              >
              { this.state.showList && <Description dangerouslySetInnerHTML={{ __html: prop.contenu }} /> }
              </CSSTransitionGroup>
            </ListeDeroulante>
          );
         })}
      </DarkBlueBlock>
    );
  }
}

export default DarkBlueBlock;
