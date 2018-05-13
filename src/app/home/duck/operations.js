import axios from 'axios';
import Actions from './actions';
import { API_ROOT } from '../../../utils/apiConfig';

const getLatestLinksAction = Actions.getLatestLinks;
const getLatestLinksSuccessAction = Actions.getLatestLinksSuccess;
const getLatestLinksFailureAction = Actions.getLatestLinksFailure;

const deleteLinkAction = Actions.deleteLink;
const deleteLinkSuccessAction = Actions.deleteLinkSuccess;

const getLatestLinks = () => {
  return dispatch => {
    dispatch(getLatestLinksAction());
    axios.get(`${API_ROOT}/links`)
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
          dispatch(getLatestLinksSuccessAction(data))
      })
      .catch(function (error) {
        dispatch(getLatestLinksFailureAction(error.response.data.data));
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

export default { getLatestLinks, deleteLink };