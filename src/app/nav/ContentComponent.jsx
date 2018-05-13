import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import ReactLoading from 'react-loading';
import shortid from 'shortid';
import './Nav.scss'

const customStyles = {
    content : {
      top                   : '40%',
      left                  : '60%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root');

class ContentComponent extends React.Component {
    constructor() {
        super();
        this.state = {
          modalIsOpen: false,
          topic: {}
        };
    }
    componentDidMount() {
        this.props.getTopics();
    }

    closeModal = () => {
        this.setState({modalIsOpen: false});
    }

    onDeleteTopic = (topic) =>  {
        this.setState({modalIsOpen: true, topic: topic});
    }

    deleteTopic = () => {
        this.props.deleteTopic(this.state.topic.id);
        this.setState({modalIsOpen: false});
    }

    render() {
        if(this.props.gettingTopics) { 
            return (
                <ReactLoading 
                    type="bubbles"
                    color='#2ecc71' 
                    height={20} 
                    width={70} 
                    className="loading"
                />
            );
        }
        return (
            <ul>
                {
                    this.props.topics.map((topic) => {
                        return (
                            <li key={shortid.generate()}>
                                <a href="#" onClick={() => this.onDeleteTopic(topic)} className="text-danger pr-3">
                                    <i class="fas fa-trash-alt"></i>
                                </a>
                                <Link to={`/topics/${topic.id}`}>{topic.name}</Link>
                            </li>
                        )
                    })
                }
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    shouldCloseOnOverlayClick={true}
                    contentLabel="Delete Topic Modal"
                >
                    <h4 className="mb-1 text-center">Delete Topic: {this.state.topic.name}?</h4>
                    <p>This will also remove all links associated with this topic.</p>
                    <button onClick={this.deleteTopic} className="btn btn-danger btn-block">Yes</button>
                    <button onClick={this.closeModal} className="btn btn-default btn-block">No</button>
                </Modal>
            </ul>
        );
    }
}

export default ContentComponent;