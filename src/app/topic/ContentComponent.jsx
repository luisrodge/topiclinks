import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import shortid from 'shortid';
import MicrolinkCard from 'react-microlink'
import ReactLoading from 'react-loading';

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
          link: {}
        };
    }

    componentDidMount() {
        this.props.getLinks(this.props.topicId);
    }

    componentDidUpdate(prevProps) {
        if (this.props.topicId !== prevProps.topicId) {
            this.props.getLinks(this.props.topicId);
        }
    }

    closeModal = () => {
        this.setState({modalIsOpen: false});
    }

    onDeleteLink = (link) =>  {
        this.setState({modalIsOpen: true, link: link});
    }

    deleteLink = () => {
        this.props.deleteLink(this.state.link.id);
        this.setState({modalIsOpen: false});
    }

    render() {
        if(this.props.gettingLinks) { 
            return (
                <ReactLoading 
                    type="bubbles"
                    color='#2ecc71' 
                    height={20} 
                    width={70} 
                    className="loading"
                />
            )
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <ul>
                            {
                                this.props.links.map((link) => {
                                    return (
                                        <li key={shortid.generate()}>
                                            <p className="link-title text-right m-0">
                                                {link.title}
                                                <i className="fas fa-trash-alt text-danger pl-3 pointer" onClick={() => this.onDeleteLink(link)}></i>
                                            </p>
                                            <MicrolinkCard
                                                url={link.url}
                                                style={{position: 'relative', width: '100%', maxWidth: '100%'}}
                                            />
                                        </li>
                                    )
                                })
                                }
                        </ul>
                    </div>
                </div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    shouldCloseOnOverlayClick={true}
                    contentLabel="Delete Link Modal"
                >
                    <h4 className="mb-3 text-center">Delete Link: {this.state.link.title}?</h4>
                    <button onClick={this.deleteLink} className="btn btn-danger btn-block">Yes</button>
                    <button onClick={this.closeModal} className="btn btn-default btn-block">No</button>
                </Modal>
            </div>
        );
    }
}

export default ContentComponent;