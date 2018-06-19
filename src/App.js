/* eslint-disable */

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Header from './components/header/Header';
import Home from './views/Home';
import Shop from './views/Shop';
import NotreOrganisation from './views/NotreOrganisation';
import EngagerSonEntreprise from './views/EngagerSonEntreprise';
import NotreActualite from './views/NotreActualite';
import FaireUnDon from './views/FaireUnDon';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/shop' component={Shop} />
            <Route path='/notre-organisation' component={NotreOrganisation} />
            <Route path='/engager-son-entreprise' component={EngagerSonEntreprise} />
            <Route path='/notre-actualite' component={NotreActualite} />
            <Route path='/faire-un-don' component={FaireUnDon} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(App));
