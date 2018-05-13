import axios from 'axios';
import { push } from 'react-router-redux'
import Actions from './actions';
import { API_ROOT } from '../../../utils/apiConfig';

const getTopicAction = Actions.getTopic;
const getTopicSuccessAction = Actions.getTopicSuccess;
const getTopicFailureAction = Actions.getTopicFailure;

const getLinksAction = Actions.getLinks;
const getLinksSuccessAction = Actions.getLinksSuccess;
const getLinksFailureAction = Actions.getLinksFailure;

const addLinkAction = Actions.addLink;
const addLinkSuccessAction = Actions.addLinkSuccess;
const addLinkFailureAction = Actions.addLinkFailure;

const deleteLinkAction = Actions.deleteLink;
const deleteLinkSuccessAction = Actions.deleteLinkSuccess;

const getTopic = (id) => {
  return dispatch => {
    dispatch(getTopicAction());
    axios.get(`${API_ROOT}/topics/${id}`)
      .then(function (response) {
          const responseData = response.data.data;
          dispatch(getTopicSuccessAction(responseData))
      })
      .catch(function (error) {
        dispatch(push('/'));
        // dispatch(getTopicFailureAction(error.response.data.data));
      });
  }
};

const getLinks = (topicId) => {
  return dispatch => {
    dispatch(getLinksAction());
    axios.get(`${API_ROOT}/topics/${topicId}/links`)
      .then(function (response) {
          const responseData = response.data.data;
          let data = [];
          responseData.map(child => {
            const childData = {
              id: child.id,
              title: child.title,
              url: child.url
            };
            data.push(childData);
          });
          dispatch(getLinksSuccessAction(data))
      })
      .catch(function (error) {
        dispatch(getLinksFailureAction(error.response.data.data));
      });
  }
};

const addLink = (link) => {
  return dispatch => {
    dispatch(addLinkAction());
    axios.post(`${API_ROOT}/links`, {
        title: link.title,
        url: link.url,
        topic_id: link.topicId
      })
      .then(function (response) {
        console.log(response.data.data);
        dispatch(addLinkSuccessAction(response.data.data));
      })
      .catch(function (error) {
        console.log("Errors", error.response);
        // dispatch(rateUserFailureAction(error.response.data.data));
      });
  }
};

const deleteLink = (linkId) => {
  return dispatch => {
    axios.delete(`${API_ROOT}/links/${linkId}`)
      .then(function (response) {
        dispatch(deleteLinkSuccessAction(linkId));
      })
      .catch(function (error) {
        console.log("Errors", error.response);
        // dispatch(rateUserFailureAction(error.response.data.data));
      });
  }
};

export default { getTopic, getLinks, addLink, deleteLink };