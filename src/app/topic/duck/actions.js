import types from './types.js';

const getTopic = () => ({
    type: types.GET_TOPIC
});

const getTopicSuccess = (json) => ({
    type: types.GET_TOPIC_SUCCESS,
    topic: json
});

const getTopicFailure = (json) => ({
    type: types.GET_TOPIC_FAILURE,
    topicErrors: json
});

const getLinks = () => ({
    type: types.GET_LINKS
});

const getLinksSuccess = (json) => ({
    type: types.GET_LINKS_SUCCESS,
    links: json
});

const getLinksFailure = (json) => ({
    type: types.GET_LINKS_FAILURE,
    linksErrors: json
});

const addLink = () => ({
    type: types.ADD_LINK
});

const addLinkSuccess = (json) => ({
    type: types.ADD_LINK_SUCCESS,
    newLink: json
});

const addLinkFailure = (json) => ({
    type: types.ADD_LINK_FAILURE,
    addLinkErrors: json
});

const deleteLink = () => ({
    type: types.DELETE_LINK
});

const deleteLinkSuccess = (linkId) => ({
    type: types.DELETE_LINK_SUCCESS,
    linkId: linkId
});

export default { 
    getTopic,
    getTopicSuccess,
    getTopicFailure,
    getLinks,
    getLinksSuccess,
    getLinksFailure,
    addLink,
    addLinkSuccess,
    addLinkFailure,
    deleteLink,
    deleteLinkSuccess
};