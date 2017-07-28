import React from 'react';
import TagListItem from './tag_list_item';
import {Motion, spring} from 'react-motion';

class TagIndex extends React.Component {

	constructor(props) {
    	super(props);
    	this.getVisibleState = this.getVisibleState.bind(this);
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