// import React from 'react';
// import { Link } from 'react-router-dom';

// class NotebookCreate extends React.Component {

// 	constructor(props) {
//     	super(props);
//     	this.handleCreate = this.handleCreate.bind(this);
// 	}

// 	handleCreate(e){
// 		e.preventDefault();
// 		this.props.createNotebook(this.props.currentNote);
// 		this.props.history.push('/');
// 	}

// 	render(){
// 		let {currentNote} = this.props;

// 		if(! currentNote){
// 			return <h3 className="loading"> Loading...</h3>;
// 		}

// 		return(
// 			<div className="deleteNotePage">
// 				<img className="delete-button-delete-page" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAdklEQVR42mNgGAXEgI6Ojv9k4OdA7E9LC8CWkGQBjE2qnhFsAbZwH1oWDKo4ALKPgjAtLcDto0FpQX19vRTRcUJqEQEyHBrmhNQeJcuC1tZWSSItOEx6kiMn2ZJjAamR/JzS4pqQBf5kWIJS4UDj5PBo9U0yAADJm9z6OD3GIQAAAABJRU5ErkJggg==" />
// 				<div className="lineOne">CREATE NOTEBOOK</div>
// 				<div className="lineTwo">
// 					<input
// 					  className="note-edit-title"
// 		              type="text"
// 		              onChange={this.updatetitle}
// 		              value={this.title}
// 		              placeholder="Title your notebook"
// 	      			/>
//       			</div>
// 				<div className="buttons">
// 					<div className="cancelButton" onClick={() => this.props.updateCurrentNote(null)}> <Link to={"/"}>Cancel</Link></div>
// 					<button className="deleteButton" onClick={this.handleDelete}>Delete</button>
// 				</div>
// 			</ div>
// 			);
// 	}
// }

// export default NotebookCreate;