import { connect } from 'react-redux';
import topicComponent from './TopicComponent';
import { topicOperations } from './duck';

const mapStateToProps = (state) => {
    const { topic, topicErrors, gettingTopic } = state.topic.topic;
    return { topic, topicErrors, gettingTopic };
};

const mapDispatchToProps = (dispatch) => {
    const getTopic = (id) => {
        dispatch(topicOperations.getTopic(id));
    };
    return { getTopic };
};

const topicContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(topicComponent);

export default topicContainer;