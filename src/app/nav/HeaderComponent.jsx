import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import shortid from 'shortid';

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

class HeaderComponent extends React.Component {
    constructor() {
        super();
    
        this.state = {
          modalIsOpen: false,
          topicName: ''
        };
    }

    closeModal = () => {
        this.setState({modalIsOpen: false});
    }

    onAddTopic = () =>  {
        this.setState({modalIsOpen: true});
    }

    addTopic = () => {
        this.props.addTopic(this.state.topicName)
        this.setState({modalIsOpen: false});
    }

    render() {
        return (
            <div>
                <button onClick={this.onAddTopic} className="btn btn-success btn-sm btn-block">
                    <i class="fas fa-plus"></i> Add New Topic
                </button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    shouldCloseOnOverlayClick={true}
                    contentLabel="Example Modal"
                >
                    <h4 className="mb-3">Add new topic</h4>
                    <form>
                        <div className="form-group">
                            <input 
                                className="form-control" 
                                placeholder="Enter topic name"
                                onChange={e => this.setState({ topicName: e.target.value })} />
                        </div>
                        <button onClick={this.addTopic} className="btn btn-success btn-block">Save Topic</button>
                    </form>
                </Modal>
            </div>
        );
    }
}

export default HeaderComponent;