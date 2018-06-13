import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBlog } from '../actions/BlogActions';
import Header from '../components/header/Header';

class Home extends Component {
  componentDidMount = () => {
    this.props.getBlog();
  }
  render() {
    return (
      
      <div className="Home">
        <Header />
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
