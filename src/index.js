import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './Store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
