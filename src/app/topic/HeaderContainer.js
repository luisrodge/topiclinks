import { connect } from 'react-redux';
import headerComponent from './HeaderComponent';
import { topicOperations } from './duck';

const mapStateToProps = (state, ownProps) => {
    const { topic, topicErrors, gettingTopic } = state.topic.topic;
    return { topic, topicErrors, gettingTopic, ...ownProps };
};

const mapDispatchToProps = (dispatch) => {
    const addLink = (link) => {
        dispatch(topicOperations.addLink(link));
    };
    const getTopic = (id) => {
        dispatch(topicOperations.getTopic(id));
    };
    return { addLink, getTopic };
};

const headerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(headerComponent);

export default headerContainer;