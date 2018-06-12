import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './Store';
import Home from './views/Home';
import Shop from './views/Shop';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </App>
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
