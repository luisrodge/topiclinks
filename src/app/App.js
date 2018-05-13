import './App.css';

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// ConnectedRouter will use the store from Provider automatically 
import { ConnectedRouter } from 'react-router-redux'
import history from './history';

//import TopicsContainer from './topics/TopicsContainer';
import TopicComponent from './topic/TopicComponent'
import HomeComponent from './home/HomeComponent';
import NavComponent from './nav/NavComponent';

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <NavComponent />
          <Route exact path='/' component={HomeComponent}/>
          <Route  path='/topics/:id' component={TopicComponent}/>
        </div>
      </ConnectedRouter>
    );
  }
}

export default App;