import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBlog } from '../actions/BlogActions';

class Home extends Component {
  componentDidMount = () => {
    this.props.getBlog();
  }
  render() {
    return (
      <div className="Home">
        HOME
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => (bindActionCreators({
      getBlog,
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(Home);
