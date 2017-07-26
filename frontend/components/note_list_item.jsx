import React from 'react';
import merge from 'lodash/merge';
import {getPlainText} from 'draft-js';

class NoteListItem extends React.Component {

	constructor(props) {
    	super(props);
    	this.onClick = this.onClick.bind(this);
    	
	}

	onClick(e){
		e.preventDefault();
		this.props.updateCurrentNote(this.props.note);
	}

	render(){
		const{note} = this.props;

		const newBody = JSON.parse(this.props.note.body).blocks[0].text; 
		// refactor for multiple paragraph
		
		return(
			<a onClick={this.onClick} className="click-to-show">
				<li className="note-list-item">
					<div className="note-title">{note.title}</div>
					<div className="note-body">{newBody}</div>
				</li>
			</a>
			);
	}
}

export default NoteListItem;