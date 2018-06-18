/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBlog } from './../actions/BlogActions';
import { getPage } from './../actions/PageActions';
import Header from '../components/header/Header';
import Cover from '../components/cover/Cover';
import WhiteBlock from '../components/general/WhiteBlock';
import Articles from '../components/general/Articles';
import Newsletter from '../components/newsletter/Newsletter';
import Footer from '../components/footer/Footer';

class NotreActualite extends Component {
  constructor(props) {
    super(props);
    this.props.getBlog();
    this.props.getPage(this.props.location.pathname);
  }

  componentDidMount = () => {
  }

  render() {
    const page = this.props.pageData.find(obj => obj.slug === this.props.location.pathname.substr(1));
    const blogs = this.props.blogData;
    if (this.props.isLoading === true || !page || !blogs) {
      return (
        <div>Loading</div>
      );
    } else {
      return (
        <div className="NotreActualite">
          <Cover title={page.title.rendered} subtitle={page.acf.sous_titre}/>
          <WhiteBlock text={''}/>
          <Articles data={blogs}/>
          <Newsletter />
          <Footer />
        </div>
      );
    }
  }
}

const mapDispatchToProps = (dispatch) => (bindActionCreators({getPage, getBlog}, dispatch));

const mapStateToProps = (state, ownProps) => {
  return {
    blogData: state.blog.posts.data,
    pageData: state.page.page.pageData,
    isLoading: state.page.isLoading,
  }
;}

export default connect(mapStateToProps, mapDispatchToProps)(NotreActualite);
