import { connect } from 'react-redux';
import contentComponent from './ContentComponent';
import { homeOperations } from './duck';

const mapStateToProps = (state) => {
    const { latestLinks, errors, gettingLatestLinks } = state.home;
    return { latestLinks, errors, gettingLatestLinks };
};

const mapDispatchToProps = (dispatch) => {
    const getLatestLinks = () => {
        dispatch(homeOperations.getLatestLinks());
    };
    const deleteLink = (linkId) => {
        dispatch(homeOperations.deleteLink(linkId));
    };
    return { getLatestLinks, deleteLink };
};

const contentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(contentComponent);

export default contentContainer;