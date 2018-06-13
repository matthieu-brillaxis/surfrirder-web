import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBlog } from '../actions/BlogActions';
import Header from '../components/header/Header';
import Cover from '../components/cover/Cover';
import ActionBlock from '../components/general/ActionBlock';

class Home extends Component {
  componentDidMount = () => {
    this.props.getBlog();
  }
  render() {
    return (
      <div className="Home">
        <Header title={'Test'}/>
        <Cover title={'Notre organisation'} subtitle={'Donner à chacun la possibilité d\'agir en faveur des océans'}/>
        <ActionBlock title={'10000 Adhérents'} subtitle={'répartis dans toute l\'Europe'}></ActionBlock>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => (bindActionCreators({
  getBlog,
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(Home);
