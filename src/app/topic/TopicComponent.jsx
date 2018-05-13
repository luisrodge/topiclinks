import React from 'react';
import { Link } from 'react-router-dom';
import HeaderContainer from './HeaderContainer';
import ContentContainer from './ContentContainer';
// import AddLinkContainer from './AddLinkContainer';
import './Topic.scss'


class TopicComponent extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="main-header">
                    <HeaderContainer topicId={this.props.match.params.id} />
                </div>
                <div className="main-content">
                    <ContentContainer topicId={this.props.match.params.id} />
                </div>
            </div>
        );
    }
}

export default TopicComponent;