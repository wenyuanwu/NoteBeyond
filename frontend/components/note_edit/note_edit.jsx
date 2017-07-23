import React from 'react';

class NoteEdit extends React.Component {

	render(){
		
		const {currentNote} = this.props;

		if(!currentNote){
   				return null;
   			}
	
   		return(

			<div>
				<header>Current Note</header>
				<ul className="current-note">
					<li>{currentNote.title}</li>
					<li>{currentNote.body}</li>
				</ul>
			</div>	
		);
	}
}

export default NoteEdit;