/* eslint-disable */

import React, { Component } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {display: true};
  }

  handleClick = (event) => {
    this.setState({display: !this.state.display});
    console.log('mdr');
  };

  render() {
    const Menu = styled.header`
      background-color: #3CA9BD;
      position: absolute;
      width: 100%
      height: 100%;
      z-index: 999;
      position: fixed;
      padding: 20px;
      top: 0;
      color: white;
      display: ${this.state.display ? 'none' : 'block'};
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
      </Menu>
    );
  }
}

export default connect(null,null)(Menu);
