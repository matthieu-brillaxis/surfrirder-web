/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPage } from './../actions/PageActions';

class EngagerSonEntreprise extends Component {
  componentDidMount = () => {
    this.props.getPage(this.props.location.pathname);
  }

  render() {
    return (
      <div className="EngagerSonEntreprise">
        EngagerSonEntreprise
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => (bindActionCreators({getPage}, dispatch));

export default connect(null, mapDispatchToProps)(EngagerSonEntreprise);
