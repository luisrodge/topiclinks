import React from 'react';
import { Link } from 'react-router-dom';
import shortid from 'shortid';
import ReactLoading from 'react-loading';
import MicrolinkCard from 'react-microlink'
import Modal from 'react-modal';

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
        this.props.getLatestLinks();
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
        if(this.props.gettingLatestLinks) { 
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
                    this.props.latestLinks.map((link) => {
                        return (
                            <li key={shortid.generate()}>
                                <p className="m-0 link-title">
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
            </ul>
        );
    }
}

export default ContentComponent;