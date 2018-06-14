/* eslint-disable */

import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

class Menu extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.mainMenu.items &&
            this.props.mainMenu.items.map(element => (
              <li key={element.id}>
                <Link to={element.object_slug}>{element.title}</Link>
                {element.children && (
                  <ul>
                    {element.children.map(element => (
                      <li key={element.id}><Link to={element.object_slug}>{element.title}</Link></li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default connect(null,null)(Menu);
