import { combineReducers } from 'redux';

// Add the reducer to the store on the `router` key
import { routerReducer } from 'react-router-redux'
import navReducer from './app/nav/duck/reducers';
import homeReducer from './app/home/duck/reducers';
import topicReducer from './app/topic/duck/reducers';

const rootReducer = combineReducers({
  router: routerReducer,
  nav: navReducer,
  home: homeReducer,
  topic: topicReducer
});

export default rootReducer;