import React from 'react';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
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
          title: '',
          url: '',
          topicId: ''
        };
    }

    componentDidMount() {
        this.setState({topicId: this.props.topicId});
        this.props.getTopic(this.props.topicId);
    }

    componentDidUpdate(prevProps) {
        if (this.props.topicId !== prevProps.topicId) {
            this.props.getTopic(this.props.topicId);
        }
    }

    closeModal = () => {
        this.setState({modalIsOpen: false});
    }

    onAddLink = () =>  {
        this.setState({modalIsOpen: true});
    }

    addLink = () => {
        console.log(this.state.url)
        this.props.addLink({
            title: this.state.title,
            url: this.state.url,
            topicId: this.props.topicId
        });
        this.setState({modalIsOpen: false});
    }

    render() {
        if(this.props.gettingTopic) { 
            <ReactLoading 
                type="bubbles"
                color='#2ecc71' 
                height={20} 
                width={70} 
                className="loading"
            />
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <h4 className="header-title">
                        <Link to="/" className="pr-2 link-success">
                            <i className="fas fa-home"></i>
                        </Link>
                        {this.props.topic.name}
                        </h4>
                    </div>
                    <div className="col-md-3 ml-auto">
                        <button onClick={this.onAddLink} className="btn btn-success btn-sm btn-block">
                        <i class="fas fa-plus"></i> Add New Link
                        </button>
                    </div>
                </div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h4 className="mb-3">Add link to {this.props.topic.name}</h4>
                    <form>
                        <div className="form-group">
                            <input 
                                className="form-control" 
                                placeholder="Enter title" 
                                onChange={e => this.setState({title: e.target.value})}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                className="form-control" 
                                placeholder="Enter url" 
                                onChange={e => this.setState({url: e.target.value})}
                            />
                        </div>
                        <button onClick={this.addLink} className="btn btn-success btn-block">Save Link</button>
                    </form>
                </Modal>
            </div>
        );
    }
}

export default HeaderComponent;