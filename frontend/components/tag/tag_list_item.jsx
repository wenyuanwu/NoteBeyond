import React from 'react';
import merge from 'lodash/merge';

class TagListItem extends React.Component {

	constructor(props) {
    	super(props);
    	this.onClick = this.onClick.bind(this);
    	
	}

	onClick(e){
		e.preventDefault();
		this.props.updateNoteEntities(this.props.tag.notes);
		this.props.handleTagIcon(e);
	}

	render(){

		const{tag} = this.props;
		
		return(
			<a onClick={this.onClick} className="note-list-item">
					<div className="note-body">{tag.name}</div>
			</a>
			);
	}
}

export default TagListItem;