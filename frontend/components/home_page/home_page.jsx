import React from 'react';
import NoteIndexContainer from '../note_index/note_index_container';
import NotebookIndexContainer from '../notebook/notebook_index_container';
import TagIndexContainer from '../tag/tag_index_container';
import NoteEditContainer from '../note_edit/note_edit_container';
import { Link } from 'react-router-dom';


class HomePage extends React.Component {

	constructor(props) {
    	super(props);
    	this.state = {
    		notebookvisible: false,
    		tagvisible: false
    	};
    	this.handleLogOut = this.handleLogOut.bind(this);
    	this.handleNotebookIcon = this.handleNotebookIcon.bind(this);
    	this.handleNoteIcon = this.handleNoteIcon.bind(this);
    	this.handleTagIcon = this.handleTagIcon.bind(this);
	}

	handleLogOut(e){
		e.preventDefault();
		this.props.resetNotes();
		this.props.logout();
	}

	handleNotebookIcon(e) {
		e.preventDefault();
		this.props.fetchAllNotebooks();
		if(this.state.tagvisible){
			this.setState({tagvisible: !this.state.tagvisible});
		}
		this.setState({notebookvisible: !this.state.notebookvisible});
	}

	handleNoteIcon(e) {
		e.preventDefault();

		if(this.state.notebookvisible === true){
			this.setState({notebookvisible: !this.state.notebookvisible});
		}

		if(this.state.tagvisible){
			this.setState({tagvisible: !this.state.tagvisible});
		}

		this.props.fetchAllNotes();	
	}

	handleTagIcon(e){
		e.preventDefault();
		this.props.fetchAllTags();
		if(this.state.notebookvisible === true){
			this.setState({notebookvisible: !this.state.notebookvisible});
		}
		this.setState({tagvisible: !this.state.tagvisible});
	}


	render(){

		let {currentUser, logout} = this.props;
		const {notebooks_open} = this.state;

		const personalGreeting = (currentUser) => (
		    <hgroup className="header-group">
		      <button className="logout-button" onClick={this.handleLogOut}>
		      	<img src="https://res.cloudinary.com/dltydzsmu/image/upload/v1500916065/logout-16_yg7fr5.png"/>
		      </button>
		    </hgroup>);

	
		return(

			<div className="wrapper">
				<div className="homePage">
					<div className="navBar">
						<img src="https://res.cloudinary.com/dltydzsmu/image/upload/v1500915656/folder_icon_snyvtd.png" />
						<div className="groupOne">
							<Link to={`/createnote`} >
								<img src="http://res.cloudinary.com/dltydzsmu/image/upload/v1506456796/create_green_kvkjgv.png" />
							</Link>
						</div>

						<div className="groupTwo">
							<Link to={`/`} onClick={this.handleNoteIcon}>
							<img src="http://res.cloudinary.com/dltydzsmu/image/upload/v1506456892/note_green_coyjj6.png" />
							</Link>	
							<Link to={`/`} onClick={this.handleNotebookIcon} >
								<img src="http://res.cloudinary.com/dltydzsmu/image/upload/v1506456950/notebook_green_yxrljh.png" />
							</Link>
							<Link to={`/`} onClick={this.handleTagIcon}>
							<img src="http://res.cloudinary.com/dltydzsmu/image/upload/v1506456998/tag_green_ipuxzk.png" />
							</Link>
						</div>

						<div className="groupThree">
							<h2 className="header-name">Hi, {currentUser.username}!</h2>
			       			{personalGreeting(currentUser, logout)}
			    		</div>

		    		</div>  

		    		<div className="noteIndex">
						<NoteIndexContainer />
						<NotebookIndexContainer visibleState={this.state.notebookvisible} handleNotebookIcon={this.handleNotebookIcon}/>
						<TagIndexContainer visibleState={this.state.tagvisible} handleTagIcon={this.handleTagIcon} />
		    		</div>  	

		    		<div className="noteShow">
						<NoteEditContainer />
		    		</div>  	
	    		</div>
	    	</div>	
			);
	}
}

export default HomePage; 

