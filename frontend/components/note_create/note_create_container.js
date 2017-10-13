import { connect } from "react-redux";
import { createNote, updateCurrentNote, fetchAllNotes } from 
	"../../actions/note_actions";
import { createTag } from "../../actions/tag_actions";
import { fetchAllNotebooks } from "../../actions/notebook_actions";
import NoteCreate from "./note_create";

const mapStateToProps = ({session, note, notebook}) => {
	const notebookObj = notebook.entities;		
	return {
		notes: Object.keys(note.entities).map(id => note.entities[id]),
		currentNote: note.currentNote,
		currentUser: session.currentUser, 
		notebooks: Object.keys(notebookObj).map(id => notebookObj[id])
	};
};

const mapDispatchToProps = dispatch => ({
	createNote: note => dispatch(createNote(note)), 
	updateCurrentNote: note => dispatch(updateCurrentNote(note)), 
	requestNotes: () => dispatch(fetchAllNotes()),
	fetchAllNotebooks: () => dispatch(fetchAllNotebooks()), 
	createTag: tag => dispatch(createTag(tag))
});

export default connect( 
	mapStateToProps,
	mapDispatchToProps
)(NoteCreate);