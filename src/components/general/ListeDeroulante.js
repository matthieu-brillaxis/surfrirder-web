import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import '../../assets/css/transition.css';

class ListeDeroulante extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: false,
    };
  }

  handleClick = () => {
    this.setState({ showList: !this.state.showList });
  };

  render() {
    const ListeDeroulanteContainer = styled.div`
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
      <ListeDeroulanteContainer>
        <Title>{ this.props.data.titre }<span onClick={this.handleClick}>+</span></Title>
        <CSSTransitionGroup
          transitionName="slide"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          { this.state.showList && <Description dangerouslySetInnerHTML={{ __html: this.props.data.contenu }} /> }
        </CSSTransitionGroup>
      </ListeDeroulanteContainer>
    );
  }
}

ListeDeroulante.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape({
    titre: PropTypes.string.isRequired,
    contenu: PropTypes.string.isRequired,
  })).isRequired,
};

export default ListeDeroulante;
