import React from 'react';
import ContentContainer from './ContentContainer';   
import './Home.scss'

class HomeComponent extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="main-header">
                    <h4 className="header-title">Latest Links</h4>
                </div>
                <div className="main-content">
                    <ContentContainer />
                </div>
            </div>
        );
    }
}

export default HomeComponent;