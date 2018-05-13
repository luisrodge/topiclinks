import React from 'react';
import { Link } from 'react-router-dom';
import shortid from 'shortid';
import HeaderContainer from './HeaderContainer';
import ContentContainer from './ContentContainer';
import FooterComponent from './FooterComponent';
import './Nav.scss'

class NavComponent extends React.Component {
    // componentDidMount() {
    //     this.props.getTopics();
    // }

    render() {
        return (
            <div className="nav">
                <div className="nav-header">
                    <HeaderContainer />
                </div>
                <div className="nav-content">
                    <ContentContainer />
                </div>
                <div className="nav-footer">
                    <FooterComponent />
                </div>
            </div>
        );
    }
}

export default NavComponent;