import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { getBlog } from './actions/BlogActions';
import { getMenu } from './actions/MenuActions';
import Menu from './components/general/Menu';
import Home from './views/Home';
import Shop from './views/Shop';
import NotreOrganisation from './views/NotreOrganisation';
import EngagerSonEntreprise from './views/EngagerSonEntreprise';
import NousAiderAutrement from './views/NousAiderAutrement';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.getBlog();
    this.props.getMenu();
  }

  render() {
    return (
      <div className="App">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/shop'>Shop</Link></li>
        </ul>
        <Menu mainMenu={this.props.mainMenu} />
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/shop' component={Shop} />
            <Route path='/notre-organisation' component={NotreOrganisation} />
            <Route path='/engager-son-entreprise' component={EngagerSonEntreprise} />
            <Route path='/nous-aider-autrement' component={NousAiderAutrement} />
          </Switch>
        </main>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => (bindActionCreators({getBlog,getMenu,}, dispatch));

const mapStateToProps = (state, ownProps) => {
  return { 
    mainMenu: state.menu.menu.mainMenu,
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
