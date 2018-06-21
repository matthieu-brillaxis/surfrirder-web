import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import ButtonDonation from './ButtonDonation';
import Logo from './Logo';
import Menu from './../general/Menu';
import { getMenu } from './../../actions/MenuActions';

class Header extends PureComponent {
  render() {
    const HeaderContainer = styled.header`
      background-color: #EEE7E3;
      height:40px;
      display: flex;
      justify-content: space-around;
      padding-top: 10px;
    `;

    return (
      <HeaderContainer>
        <Logo />
        <Menu mainMenu={this.props.mainMenu} />
        <ButtonDonation />
      </HeaderContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => (bindActionCreators(getMenu, dispatch));

const mapStateToProps = (state, ownProps) => {
  return {
    mainMenu: state.menu.menu.mainMenu,
  };
};

Header.propTypes = {
  mainMenu: PropTypes.object.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
