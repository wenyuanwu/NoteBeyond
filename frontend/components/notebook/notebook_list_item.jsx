import React from 'react';
import merge from 'lodash/merge';

class NoteBookListItem extends React.Component {

	constructor(props) {
    	super(props);
    	// this.onClick = this.onClick.bind(this);
    	
	}

	// onClick(e){
	// 	e.preventDefault();
	// 	this.props.updateCurrentNote(this.props.note);
	// }

	render(){
		const{notebook} = this.props;
		
		return(
			<a onClick={this.onClick} className="notebook-item-click">
					<div className="notebook-title">{notebook.title}</div>
			</a>
			);
	}
}

export default NoteBookListItem;