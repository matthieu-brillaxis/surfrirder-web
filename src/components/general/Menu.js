import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faArrowLeft from '@fortawesome/fontawesome-free-solid/faArrowLeft';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      submenu: null,
    };
  }

  handleClick = () => {
    this.setState({ display: !this.state.display });
  };

  ClickOnMenu = (e) => {
    this.setState({ submenu: e });
  };

  handleCloseSubMenu = () => {
    this.setState({ submenu: null });
  }

  handleCloseAllMenu = () => {
    this.setState({ display: false });
    this.setState({ submenu: null });
  }

  render() {
    const BurgerButton = styled.div``;

    const BurgerButtonBarre = styled.div`
    width: 25px;
    height: 3px;
    background-color: #176779;
    margin: 4px 0;
    `;

    const Close = styled.div`
    text-align: center;
    padding:32px;
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 1.67px;
    line-height: 20px;
    font-family: "Open Sans";
    `;

    const Ul = styled.ul`
    text-align: center;
    color: white;
    padding: 0;
    list-style-type: none;
    `;

    const Li = styled.li`
    text-align: center;
    color: white;
    padding: 0;
    list-style-type: none;
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 1.67px;
    line-height: 20px;
    font-family: "Open Sans";
    `;

    const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    `;

    const Donation = styled(Link)`
      background-color: #10677A;
      border-radius: 18px;
      color: white;
      text-transform: uppercase;
      text-align: center;
      padding: 16px;
      font-size: 0.8em;
      height: 24px;
      text-decoration:none;
      line-height:4px;
    `;

    return (
      <div className="MenuContainer">
        <BurgerButton onClick={this.handleClick}>
          <BurgerButtonBarre />
          <BurgerButtonBarre />
          <BurgerButtonBarre />
        </BurgerButton>
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          { this.state.display ?
            <div className="contentMenu">
              <Close onClick={this.handleClick}><FontAwesomeIcon icon={faTimes} /></Close>
              <Ul>
                <Li><StyledLink to="/">Accueil</StyledLink></Li>
                {this.props.mainMenu.items &&
                  this.props.mainMenu.items.map(element => (
                    <Li key={element.id}>
                      <p onClick={() => this.ClickOnMenu(element.children)} >{element.title}</p>
                    </Li>
                  ))}
                <Li>
                  <Donation to="/faire-un-don">Faire un don</Donation>
                </Li>
              </Ul>
            </div> : null }
        </CSSTransitionGroup>
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          { this.state.submenu && (
          <div className="subMenu">
            <Close onClick={this.handleCloseAllMenu}><FontAwesomeIcon icon={faTimes} /></Close>
            <Close onClick={this.handleCloseSubMenu}><FontAwesomeIcon icon={faArrowLeft} /> Retour</Close>
            <Ul>
              { this.state.submenu.map(element => (
                <Li key={element.id}><StyledLink to={element.object_slug}>{element.title}</StyledLink></Li>
              ))}
              <Li>
                <Donation to="/faire-un-don">Faire un don</Donation>
              </Li>
            </Ul>
          </div>
        )}
        </CSSTransitionGroup>
      </div>
    );
  }
}

Menu.propTypes = {
  mainMenu: PropTypes.object.isRequired,
};

export default connect(null, null)(Menu);
