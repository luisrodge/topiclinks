import { combineReducers } from "redux";
import types from './types';

const STATE = {
  topics: [],
  topicsErrors: [],
  gettingTopics: false,
  addTopicErrors: [],
  addingTopic: false,
  deletingTopic: false,
}

const navReducer = (state=STATE, action) => {
    switch(action.type) {
        case types.GET_TOPICS: {
          return {
            ...state,
            gettingTopics: true,
          }
        }
        
        case types.GET_TOPICS_SUCCESS: {
          const { topics } = action;
          return {
            ...state,
            topics,
            gettingTopics: false
          }
        }

        case types.GET_TOPICS_FAILURE: {
          const { topicsErrors } = action;
          return {
            ...state,
            topicsErrors,
            gettingTopics: false
          }
        }

        case types.ADD_TOPIC: {
          return {
            ...state,
            addingTopic: true,
          }
        }
        
        case types.ADD_TOPIC_SUCCESS: {
          const { newTopic } = action;
          return {
            ...state,
            topics: [
              ...state.topics.slice(0,0), 
              newTopic,
              ...state.topics.slice(0)
            ],
            addingTopic: false
          }
        }
  
        case types.ADD_TOPIC_FAILURE: {
          const { addTopicErrors } = action;
          return {
            ...state,
            addTopicErrors,
            addingTopic: false
          }
        }

        case types.DELETE_TOPIC: {
          return {
            ...state,
            deletingTopic: true,
          }
        }
        
        case types.DELETE_TOPIC_SUCCESS: {
          const { topicId } = action;
          return {
            ...state,
            topics: state.topics.filter(item => topicId !== item.id),
            deletingTopic: false
          }
        }

        default: return state;
    }
}

// const topicsReducer = combineReducers({
//   getTopics: getTopicsReducer,
//   addTopic: addTopicReducer
// });

export default navReducer;