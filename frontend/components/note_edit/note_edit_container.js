import { connect } from "react-redux";
import { updateNote, deleteNote, fetchAllNotes } from 
	"../../actions/note_actions";
import NoteEdit from "./note_edit";

const mapStateToProps = ({ note }) => {	
	return {
		errors: note.errors,
		currentNote: note.currentNote,
	};
};

const mapDispatchToProps = dispatch => ({
	updateNote: note => dispatch(updateNote(note)),
	deleteNote: note => dispatch(deleteNote(note)),
	fetchAllNotes: () => dispatch(fetchAllNotes()),
});

export default connect( 
	mapStateToProps,
	mapDispatchToProps
)(NoteEdit);