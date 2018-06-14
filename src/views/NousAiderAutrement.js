/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPage } from './../actions/PageActions';

class NousAiderAutrement extends Component {
  componentDidMount = () => {
    this.props.getPage(this.props.location.pathname);
  }

  render() {
    console.log(this.props.location.pathname)
    return (
      <div className="NousAiderAutrement">
        NousAiderAutrement
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => (bindActionCreators({getPage}, dispatch));

export default connect(null, mapDispatchToProps)(NousAiderAutrement);
