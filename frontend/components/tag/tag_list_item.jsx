import React from 'react';
import merge from 'lodash/merge';
import TagsInput from 'react-tagsinput';

class TagListItem extends React.Component {

	constructor(props) {
    	super(props);
    	this.state = {tags: [], tag: ""};
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
			<a onClick={this.onClick} className="tag-list-item">
                <div className="tag-body">{tag.name}</div>
			</a>
			);
	}
}

export default TagListItem;