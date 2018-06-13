import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { getBlog } from './actions/BlogActions';
import Home from './views/Home';
import Shop from './views/Shop';

class App extends Component {
  componentDidMount = () => {
    this.props.getBlog();
  }

  render() {
    return (
      <div className="App">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/shop'>Shop</Link></li>
        </ul>
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/shop' component={Shop} />
          </Switch>
        </main>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => (bindActionCreators({
    getBlog,
  }, dispatch)
);

export default withRouter(connect(null, mapDispatchToProps)(App));
