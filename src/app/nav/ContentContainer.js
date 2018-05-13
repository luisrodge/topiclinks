import { connect } from 'react-redux';
import contentComponent from './ContentComponent';
import { navOperations } from './duck';

const mapStateToProps = (state) => {
    const { topics, topicsErrors, gettingTopics } = state.nav;
    return { topics, topicsErrors, gettingTopics };
};

const mapDispatchToProps = (dispatch) => {
    const getTopics = () => {
        dispatch(navOperations.getTopics());
    };
    const deleteTopic = (topicId) => {
        dispatch(navOperations.deleteTopic(topicId));
    };
    return { getTopics, deleteTopic };
};

const contentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(contentComponent);

export default contentContainer;