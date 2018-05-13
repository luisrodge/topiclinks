import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// redux-logger is a middleware that logs every state change
import logger from 'redux-logger';

import thunk from 'redux-thunk';
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import App from './app/App';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker'

import { routerMiddleware, } from 'react-router-redux'

import history from './app/history';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.scss';

// For redux-devtools extension to work
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Build the middleware for intercepting and dispatching navigation actions
const routerMw = routerMiddleware(history)

const middleware = composeEnhancers(applyMiddleware(thunk, logger, routerMw));
const store = createStore(rootReducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();