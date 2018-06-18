/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPage } from './../actions/PageActions';
import Header from '../components/header/Header';
import Cover from '../components/cover/Cover';
import Newsletter from '../components/newsletter/Newsletter';
import Footer from '../components/footer/Footer';

class NotreActualite extends Component {
  constructor(props) {
    super(props);
    this.props.getPage(this.props.location.pathname);
  }

  componentDidMount = () => {
  }

  render() {
    const page = this.props.pageData.find(obj => obj.slug === this.props.location.pathname.substr(1));
    if (this.props.isLoading === true || !page) {
      return (
        <div>Loading</div>
      );
    } else {
      return (
        <div className="NotreActualite">
          <Header/>
          <Cover title={page.title.rendered} subtitle={page.acf.sous_titre}/>
          <Newsletter />
          <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(NotreActualite);
