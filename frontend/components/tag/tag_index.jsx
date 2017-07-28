import React from 'react';
import TagListItem from './tag_list_item';
import {Motion, spring} from 'react-motion';
// import TagsInput from 'react-tagsinput';

class TagIndex extends React.Component {

	constructor(props) {
    	super(props);
    	this.getVisibleState = this.getVisibleState.bind(this);
    	// this.state = {tags: [], tag: ''};
    	// this.handleChange = this.handleChange.bind(this);
    	// this.handleChangeInput = this.handleChangeInput.bind(this);
	}

	getVisibleState(){
		if(this.props.visibleState === true){
			return 0;
		}else{
			return -100;
		}
	}

	componentDidMount(){
		this.props.fetchAllTags();
	}

	// handleChange(tags) {
 //    	this.setState({tags});
 //    	// this.props.updateNoteEntities(this.props.tag.notes);
 //    	this.props.handleTagIcon();
 //  	}

  	// handleChangeInput(tag) {
   //  	this.setState({tag});
   //  	this.props.updateNoteEntities(this.props.tag.notes);
   //  	this.props.handleTagIcon();
  	// }

	render(){
		
		const {tags, errors} = this.props;
 		
		const tagItems = tags.map(tag => 
			<TagListItem key={tag.id} tag={tag} handleTagIcon={this.props.handleTagIcon} updateNoteEntities={this.props.updateNoteEntities}/>
			);

   		return(
   			<Motion style={{x: spring(this.getVisibleState())}} >
   			{	

   				function({x}) {
   					return(
						<div  className="flyoutMenu" style={{
                  			transform: "translate3d(" + x + "vw, 0vw, 0)" }}>
							<div className="notebookIndex">
									<header className="noteHeader">TAGS</header>
									<ul className="note-list">
										{tagItems}
									</ul>
							</div>
							<div className="placeholder">
							</div>
						</div>
					);
				}
			}
			</Motion>
		);
	}

}

export default TagIndex;