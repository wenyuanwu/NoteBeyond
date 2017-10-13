import { connect } from "react-redux";
import { fetchAllNotes, updateCurrentNote } from "../../actions/note_actions";
import NoteIndex from "./note_index";

const mapStateToProps = ({ note }) => {
	const noteObj = note.entities;		
	return {
		notes: Object.keys(noteObj).map(id => noteObj[id]),
		errors: note.errors
	};
};

const mapDispatchToProps = dispatch => ({
	requestNotes: () => dispatch(fetchAllNotes()),
	updateCurrentNote: note => dispatch(updateCurrentNote(note))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NoteIndex);