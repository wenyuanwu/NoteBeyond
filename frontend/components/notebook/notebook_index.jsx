import React from 'react';
import NoteBookListItem from './notebook_list_item';
import {Motion, spring} from 'react-motion';

class NotebookIndex extends React.Component {

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
		this.props.requestNotebooks();
	}


	render(){
		
		const {notebooks, errors} = this.props;
 		
		const notebookItems = notebooks.map(notebook => 
			<NoteBookListItem key={notebook.id} notebook={notebook} handleNotebookIcon={this.props.handleNotebookIcon} updateNoteEntities={this.props.updateNoteEntities}/>
			);

   		return(
   			<Motion style={{x: spring(this.getVisibleState())}} >
   			{	

   				function({x}) {
   					return(
						<div  className="flyoutMenu" style={{
                  			transform: "translate3d(" + x + "vw, 0vw, 0)" }}>
							<div className="notebookIndex">
									<header className="noteHeader">NOTEBOOKS</header>
									<ul className="notebook-list">
										{notebookItems}
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

export default NotebookIndex;