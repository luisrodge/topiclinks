import { connect } from 'react-redux';
import contentComponent from './ContentComponent';
import { topicOperations } from './duck';

const mapStateToProps = (state, ownProps) => {
    const { links, gettingLinks, linksErrors } = state.topic.links;
    return { links, gettingLinks, linksErrors, ...ownProps };
};

const mapDispatchToProps = (dispatch) => {
    const getLinks = (topicId) => {
        dispatch(topicOperations.getLinks(topicId));
    };
    const deleteLink = (linkId) => {
        dispatch(topicOperations.deleteLink(linkId));
    };
    return { getLinks, deleteLink };
};

const contentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(contentComponent);

export default contentContainer;