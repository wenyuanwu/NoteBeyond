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
			<a onClick={this.onClick} className="notebook-list-item">
					<div className="notebook-body">{notebook.title}</div>
			</a>
			);
	}
}

export default NoteBookListItem;