import { combineReducers } from 'redux';
import types from './types';

const TOPIC_STATE = {
  topic: {},
  topicErrors: {},
  gettingTopic: false,
}

const LINKS_STATE = {
  links: [],
  linksErrors: {},
  gettingLinks: false,
  addingLink: false,
  addLinkErrors: {},
}

const getTopicReducer = (state=TOPIC_STATE, action) => {
    switch(action.type) {
        case types.GET_TOPIC: {
          return {
            ...state,
            gettingTopic: true,
          }
        }
        
        case types.GET_TOPIC_SUCCESS: {
          const { topic } = action;
          return {
            ...state,
            topic,
            gettingTopic: false
          }
        }

        case types.GET_TOPIC_FAILURE: {
          const { topicErrors } = action;
          return {
            ...state,
            topicErrors,
            gettingTopic: false
          }
        }

        default: return state;
    }
}

const linksReducer = (state=LINKS_STATE, action) => {
  switch(action.type) {
      case types.GET_LINKS: {
        return {
          ...state,
          gettingLinks: true,
        }
      }
      
      case types.GET_LINKS_SUCCESS: {
        const { links } = action;
        return {
          ...state,
          links,
          gettingLinks: false
        }
      }

      case types.GET_LINKS_FAILURE: {
        const { linksErrors } = action;
        return {
          ...state,
          linksErrors,
          gettingLinks: false
        }
      }

      case types.ADD_LINK: {
        return {
          ...state,
          addingLink: true,
        }
      }
      
      case types.ADD_LINK_SUCCESS: {
        const { newLink } = action;
        return {
          ...state,
          links: [
            ...state.links.slice(0,0), 
            newLink,
            ...state.links.slice(0)
          ],
          addingLink: false
        }
      }

      case types.ADD_LINK_FAILURE: {
        const { addLinkErrors } = action;
        return {
          ...state,
          addLinkErrors,
          addingLink: false
        }
      }

      case types.DELETE_LINK_SUCCESS: {
        const { linkId } = action;
        return {
          ...state,
          links: state.links.filter(item => linkId !== item.id),
        }
      }

      default: return state;
  }
}

const topicReducer = combineReducers({
  topic: getTopicReducer,
  links: linksReducer,
});

export default topicReducer;