import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cover from '../components/cover/Cover';
import ActionBlock from '../components/general/ActionBlock';
import Footer from '../components/footer/Footer';
import Newsletter from '../components/newsletter/Newsletter';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Cover title={'Notre organisation'} subtitle={'Donner à chacun la possibilité d\'agir en faveur des océans'}/>
        <ActionBlock title={'10000 Adhérents'} subtitle={'répartis dans toute l\'Europe'}></ActionBlock>
        <Newsletter text={'Random text'} />
        <Footer />
      </div>
    );
  }
}

export default connect(null, null)(Home);
