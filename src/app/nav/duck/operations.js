import axios from 'axios';
import { push } from 'react-router-redux'
import Actions from './actions';
import { API_ROOT } from '../../../utils/apiConfig';

const getTopicsAction = Actions.getTopics;
const getTopicsSuccessAction = Actions.getTopicsSuccess;
const getTopicsFailureAction = Actions.getTopicsFailure;

const addTopicAction = Actions.addTopic;
const addTopicSuccessAction = Actions.addTopicSuccess;
const addTopicFailureAction = Actions.addTopicFailure;

const deleteTopicAction = Actions.deleteTopic;
const deleteTopicSuccessAction = Actions.deleteTopicSuccess;
const deleteTopicFailureAction = Actions.deleteTopicFailure;

const getTopics = () => {
  return dispatch => {
    dispatch(getTopicsAction());
    axios.get(`${API_ROOT}/topics`)
      .then(function (response) {
          const responseData = response.data.data;
          let data = [];
          responseData.map(child => {
            const childData = {
              id: child.id,
              name: child.name,
            };
            data.push(childData);
          });
          dispatch(getTopicsSuccessAction(data))
      })
      .catch(function (error) {
        dispatch(getTopicsFailureAction(error.response.data.data));
      });
  }
};

const addTopic = (topicName) => {
  return dispatch => {
    dispatch(addTopicAction());
    axios.post(`${API_ROOT}/topics`, {
        name: topicName,
      })
      .then(function (response) {
        console.log(response.data.data);
        dispatch(addTopicSuccessAction(response.data.data));
      })
      .catch(function (error) {
        console.log("Errors", error.response);
        // dispatch(rateUserFailureAction(error.response.data.data));
      });
  }
};

const deleteTopic = (topicId) => {
  return dispatch => {
    dispatch(deleteTopicAction());
    axios.delete(`${API_ROOT}/topics/${topicId}`)
      .then(function (response) {
        dispatch(deleteTopicSuccessAction(topicId));
        dispatch(push('/'));
      })
      .catch(function (error) {
        console.log("Errors", error.response);
        // dispatch(rateUserFailureAction(error.response.data.data));
      });
  }
};

export default { getTopics, addTopic, deleteTopic }