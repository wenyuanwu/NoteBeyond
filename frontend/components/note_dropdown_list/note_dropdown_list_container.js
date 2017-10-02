import { connect } from 'react-redux';
import { fetchAllNotebooks } from '../../actions/notebook_actions';
import NoteDropDownList from './note_dropdown_list';

const mapStateToProps = ({notebook, note}) => {
	const notebookObj = notebook.entities;
	let currentNotebook = null;
	
	if (note.currentNote){
		const currentNotebookId = note.currentNote.notebook_id;
		currentNotebook = notebookObj[currentNotebookId];}

	return {
		notebooks: Object.keys(notebookObj).map(id => notebookObj[id]),
		currentNotebook: currentNotebook
	};
};

const mapDispatchToProps = dispatch => ({
	fetchAllNotebooks: () => dispatch(fetchAllNotebooks())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NoteDropDownList);