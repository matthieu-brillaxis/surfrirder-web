import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import RoundImage from './RoundImage';

class PersonCard extends Component {
  render() {
    const PersonCardContainer = styled.div`
      width:40%;
      text-align: center;
    `;

    const PersonName = styled.p`
      color:#91DAE9;
    `;

    const PersonPost = styled.p`
      color:white;
      text-transform:uppercase;
    `;


    return (
      <PersonCardContainer>
        <RoundImage url={this.props.element.image}/>
        <PersonName>{this.props.element['nom_et_prenom']}</PersonName>
        <PersonPost>{this.props.element.poste}</PersonPost>
      </PersonCardContainer>
    );
  }
}

export default connect(null, null)(PersonCard);
