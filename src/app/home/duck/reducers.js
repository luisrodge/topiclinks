import { combineReducers } from "redux";
import types from './types';

const STATE = {
  latestLinks: [],
  errors: [],
  gettingLatestLinks: false
}

const homeReducer = (state=STATE, action) => {
    switch(action.type) {
        case types.GET_LATEST_LINKS: {
          return {
            ...state,
            gettingLatestLinks: true,
          }
        }
        
        case types.GET_LATEST_LINKS_SUCCESS: {
          const { latestLinks } = action;
          return {
            ...state,
            latestLinks,
            gettingLatestLinks: false
          }
        }

        case types.GET_LATEST_LINKS_FAILURE: {
          const { errors } = action;
          return {
            ...state,
            errors,
            gettingLatestLinks: false
          }
        }

        case types.DELETE_LINK_SUCCESS: {
          const { linkId } = action;
          return {
            ...state,
            latestLinks: state.latestLinks.filter(item => linkId !== item.id),
          }
        }

        default: return state;
    }
}

// const topicsReducer = combineReducers({
//   getTopics: getTopicsReducer,
//   addTopic: addTopicReducer
// });

export default homeReducer;