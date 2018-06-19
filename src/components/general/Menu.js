/* eslint-disable */

import React, { Component } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {display: false};
  }

  handleClick = (event) => {
    this.setState({display: !this.state.display});
    console.log('mdr');
  };

  render() {
    const Menu = styled.header`
    position: absolute;
    `;

    const ContentMenu = styled.div`
      background-color: #3CA9BD;
      position: absolute;
      width: 100%
      height: 0;
      z-index: 999;
      position: fixed;
      overflow-y: hidden;
      top: 0;
      color: white;
      transition-property: all;
	    transition-duration: .5s;
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      transition: all .5s ease-in-out;
    `;

    //display: ${this.state.display ? 'block' : 'hidden'};

    const BurgerButton = styled.div``;

    const BurgerButtonBarre = styled.div`
    width: 25px;
    height: 3px;
    background-color: #176779;
    margin: 4px 0;
    `;

    const Close = styled.div`
    text-align: center;
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
    `;

    const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    `;

      return (
        <Menu>
        <BurgerButton onClick={this.handleClick}>
          <BurgerButtonBarre/>
          <BurgerButtonBarre/>
          <BurgerButtonBarre/>
        </BurgerButton>
        <ContentMenu className={(this.state.display ? 'slidedown' : '')}>
        <Close onClick={this.handleClick}>X</Close>
          <Ul>
            <Li><StyledLink to='/'>Home</StyledLink></Li>
            <Li><StyledLink to='/shop'>Shop</StyledLink></Li>
            {this.props.mainMenu.items &&
              this.props.mainMenu.items.map(element => (
                <Li key={element.id}>
                  <StyledLink to={element.object_slug}>{element.title}</StyledLink>
                  {element.children && (
                    <Ul>
                      {element.children.map(element => (
                        <Li key={element.id}><StyledLink to={element.object_slug}>{element.title}</StyledLink></Li>
                      ))}
                    </Ul>
                  )}
                </Li>
              ))}
          </Ul>
        </ContentMenu>
        </Menu>
      );
  }
}

export default connect(null,null)(Menu);
