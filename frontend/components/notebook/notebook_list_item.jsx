import React from 'react';
import merge from 'lodash/merge';

class NoteBookListItem extends React.Component {

	constructor(props) {
    	super(props);
    	this.onClick = this.onClick.bind(this);
    	
	}

	onClick(e){
		e.preventDefault();
		this.props.updateNoteEntities(this.props.notebook.notes);
		this.props.handleNotebookIcon(e);
	}

	render(){

		const{notebook} = this.props;
		
		return(
			<a onClick={this.onClick} className="note-list-item">
					<div className="note-body">{notebook.title}</div>
			</a>
			);
	}
}

export default NoteBookListItem;