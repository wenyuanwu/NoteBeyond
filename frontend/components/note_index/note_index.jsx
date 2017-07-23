import React from 'react';
import NoteListItem from '../note_list_item';


class NoteIndex extends React.Component {

	componentDidMount(){
		this.props.requestNotes();
	}

	render(){
		const {notes, errors} = this.props;
		
		const noteItems = notes.map(note => 
			<NoteListItem key={note.id} note={note} updateCurrentNote={this.props.updateCurrentNote} />
			);

   		return(
			<div>
				<header>Notes</header>
				<ul className="note-list">
					{noteItems}
				</ul>
			</div>	
		);
	}
}

export default NoteIndex;