/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPage } from './../actions/PageActions';
import Header from '../components/header/Header';
import Cover from '../components/cover/Cover';
import WhiteBlock from '../components/general/WhiteBlock';
import WaterBlock from '../components/general/WaterBlock';
import DarkBlueBlock from '../components/general/DarkBlueBlock';
import AdminBlock from '../components/general/AdminBlock';
import Newsletter from '../components/newsletter/Newsletter';
import Footer from '../components/footer/Footer';

class NotreOrganisation extends Component {
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
        <div className="NotreOrganisation">
          <Cover title={page.title.rendered} subtitle={page.acf.sous_titre}/>
          <WhiteBlock text={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam'}/>
          <WaterBlock data={page.acf.block_de_donnee}/>
          <AdminBlock 
            adminTitle={page.acf['titre-conseil-administration']}
            adminDesc={page.acf['description-conseil-administration']}
            adminCard={page.acf['membres_du_conseil']}
          />
          <DarkBlueBlock data={page.acf.liste_block}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(NotreOrganisation);
