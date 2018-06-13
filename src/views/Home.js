import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Newsletter from '../components/newsletter/Newsletter';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <Newsletter text={'Random text'} />
        <Footer />
      </div>
    );
  }
}

export default connect(null, null)(Home);
