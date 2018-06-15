import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PersonCard from '../general/PersonCard';
import bloc4 from '../../assets/img/bloc_4.png';

class AdminBlock extends Component {
  renderAdminCard = () => {
    let key = 0;
    return (
      this.props.adminCard.map(element => <PersonCard element={element} key={key = key + 1} />)
    );
  }

  render() {
    const AdminBlockContainer = styled.div`
      background-color:#10677A;
      display:flex;
      flex-direction:column;
      flex-wrap:wrap;
      justify-content:center;
      position:relative;
      padding-bottom:80px;

      &:before {
        content:'';
        height:70px;
        width:100%;
        background:url(${bloc4});
        background-size: cover;
        overflow: visible;
        position: absolute;
        top: -70px;
        background-color: transparent;
      }
    `;

    const AdminTitle = styled.h1`
      color:white;
      padding-right:32px;
      padding-left:32px;
    `;

    const AdminDesc = styled.p`
      color:#91DAE9;
      padding-left:32px;
      padding-right:32px;
    `;

    const AdminCardContainer = styled.div`
      display:flex;
      flex-wrap:wrap;
      justify-content:space-evenly;
    `;
    
    return (
      <AdminBlockContainer>
        <AdminTitle>{ this.props.adminTitle }</AdminTitle>
        <AdminDesc dangerouslySetInnerHTML={{ __html: this.props.adminDesc }} />
        <AdminCardContainer>
          {this.renderAdminCard()}
        </AdminCardContainer>
      </AdminBlockContainer>
    );
  }
}

export default connect(null, null)(AdminBlock);
