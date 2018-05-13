import types from './types.js';

const getTopics = () => ({
    type: types.GET_TOPICS
});

const getTopicsSuccess = (json) => ({
    type: types.GET_TOPICS_SUCCESS,
    topics: json
});

const getTopicsFailure = (json) => ({
    type: types.GET_TOPICS_FAILURE,
    topicsErrors: json
});

const addTopic = () => ({
    type: types.ADD_TOPIC
});

const addTopicSuccess = (json) => ({
    type: types.ADD_TOPIC_SUCCESS,
    newTopic: json
});

const addTopicFailure = (json) => ({
    type: types.ADD_TOPIC_FAILURE,
    addTopicErrors: json
});

const deleteTopic = () => ({
    type: types.DELETE_TOPIC
});

const deleteTopicSuccess = (topicId) => ({
    type: types.DELETE_TOPIC_SUCCESS,
    topicId: topicId
});

const deleteTopicFailure = (json) => ({
    type: types.DELETE_TOPIC_FAILURE,
    deleteTopicErrors: json
});

export default { 
    getTopics,
    getTopicsSuccess,
    getTopicsFailure,
    addTopic,
    addTopicSuccess,
    addTopicFailure,
    deleteTopic,
    deleteTopicSuccess,
    deleteTopicFailure
};