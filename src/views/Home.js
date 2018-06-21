/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPage } from './../actions/PageActions';
import styled from 'styled-components';
import Cover from '../components/cover/Cover';
import StoreBlock from '../components/general/StoreBlock';
import Footer from '../components/footer/Footer';
import Newsletter from '../components/newsletter/Newsletter';

class Home extends Component {
  constructor(props) {
    super(props);
    this.props.getPage('/accueil');
  }
  
  render() {
    const page = this.props.pageData.find(obj => obj.slug === 'accueil');
    console.log(page);

    if (this.props.isLoading === true || !page) {
      return (
        <div>Loading</div>
      );
    } else {
      return (
        <div className="Home">
          <Cover title={page.title.rendered} subtitle={page.acf.sous_titre}/>
          <StoreBlock title={page.acf['titre-shop']} subtitle={page.acf['sous-titre-shop']} label={page.acf['bouton-label-shop'] }></StoreBlock>
          <Newsletter text={'Random text'} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
