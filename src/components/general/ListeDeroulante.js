/* eslint-disable */

import React, { Component } from 'react';
import styled from 'styled-components';
import '../../assets/css/transition.css'
import { CSSTransitionGroup } from 'react-transition-group';

class ListeDeroulante extends Component {
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
      <ListeDeroulante>
        <Title>{ this.props.data.titre }<span onClick={this.handleClick}>+</span></Title>
          <CSSTransitionGroup
            transitionName="slide"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            { this.state.showList && <Description dangerouslySetInnerHTML={{ __html: this.props.data.contenu }} /> }
          </CSSTransitionGroup>
       </ListeDeroulante>
    );
  }
}

export default ListeDeroulante;
