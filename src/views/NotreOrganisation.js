/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPage } from './../actions/PageActions';
import Header from '../components/header/Header';
import Cover from '../components/cover/Cover';
import WhiteBlock from '../components/general/WhiteBlock';
import WaterBlock from '../components/general/WaterBlock';

class NotreOrganisation extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.getPage(this.props.location.pathname);
  }

  render() {
    if (this.props.isLoading === true) {
      return (
        <div>Loading</div>
      );
    } else {
      const page = this.props.pageData.find(obj => obj.slug === this.props.location.pathname.substr(1));
      console.log(page.acf.block_de_donnee);
      return (
        <div className="NotreOrganisation">
          <Header title={'Test'}/>
          <Cover title={page.title.rendered} subtitle={'Donner à chacun la possibilité d\'agir en faveur des océans'}/>
          <WhiteBlock text={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam'}/>
          <WaterBlock data={page.acf.block_de_donnee}/>
        </div>
  );
    }
  }
}

const mapDispatchToProps = (dispatch) => (bindActionCreators({getPage}, dispatch));

const mapStateToProps = (state, ownProps) => {
  return { 
    pageData: state.page.page.pageData,
    isLoading: state.page.isLoading,
  }
;}

export default connect(mapStateToProps, mapDispatchToProps)(NotreOrganisation);
