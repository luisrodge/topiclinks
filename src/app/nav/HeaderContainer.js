import { connect } from 'react-redux';
import headerComponent from './HeaderComponent';
import { navOperations } from './duck';

// const mapStateToProps = (state) => {
//     const { topics, topicsErrors, gettingTopics } = state.topics;
//     return { topics, topicsErrors, gettingTopics };
// };

const mapDispatchToProps = (dispatch) => {
    const addTopic = (topicName) => {
        dispatch(navOperations.addTopic(topicName));
    };
    return { addTopic };
};

const headerContainer = connect(
    null,
    mapDispatchToProps
)(headerComponent);

export default headerContainer;