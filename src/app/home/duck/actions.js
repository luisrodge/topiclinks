import types from './types.js';

const getLatestLinks = () => ({
    type: types.GET_LATEST_LINKS
});

const getLatestLinksSuccess = (json) => ({
    type: types.GET_LATEST_LINKS_SUCCESS,
    latestLinks: json
});

const getLatestLinksFailure = (json) => ({
    type: types.GET_LATEST_LINKS_FAILURE,
    errors: json
});


const deleteLink = () => ({
    type: types.DELETE_LINK
});

const deleteLinkSuccess = (linkId) => ({
    type: types.DELETE_LINK_SUCCESS,
    linkId: linkId
});

export default { 
    getLatestLinks,
    getLatestLinksSuccess,
    getLatestLinksFailure,
    deleteLink,
    deleteLinkSuccess
};