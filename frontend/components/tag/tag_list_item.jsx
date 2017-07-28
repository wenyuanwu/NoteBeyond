import React from 'react';
import merge from 'lodash/merge';
import TagsInput from 'react-tagsinput';
// import ReactDOM from 'react-dom';
// import { WithContext as ReactTags } from 'react-tag-input';

class TagListItem extends React.Component {

	constructor(props) {
    	super(props);
    	this.state = {tags: [], tag: ""};
    	this.onClick = this.onClick.bind(this);
    	this.handleChange = this.handleChange.bind(this);
    	this.handleChangeInput = this.handleChangeInput.bind(this);
    	// this.handleDelete = this.handleDelete.bind(this);
     //    this.handleAddition = this.handleAddition.bind(this);
     //    this.handleDrag = this.handleDrag.bind(this);
	}

	onClick(e){
		e.preventDefault();
		this.props.updateNoteEntities(this.props.tag.notes);
		this.props.handleTagIcon(e);
	}

	  handleChange(tags) {
    	this.setState({tags});
  	}

  	handleChangeInput(tag) {
    	this.setState({tag});
  	}


	// handleDelete(i) {
 //        let tags = this.state.tags;
 //        tags.splice(i, 1);
 //        this.setState({tags: tags});
 //    }

 //    handleAddition(tag) {
 //        let tags = this.state.tags;
 //        tags.push({
 //            id: tags.length + 1,
 //            text: tag
 //        });
 //        this.setState({tags: tags});
 //    }

 //    handleDrag(tag, currPos, newPos) {
 //        let tags = this.state.tags;
 
        // mutate array 
        // tags.splice(currPos, 1);
        // tags.splice(newPos, 0, tag);
 
        // re-render 
        // this.setState({ tags: tags });
    // }

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