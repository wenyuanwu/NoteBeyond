import { connect } from 'react-redux';
import { createNote, updateCurrentNote } from '../../actions/note_actions';
import { fetchAllNotebooks } from '../../actions/notebook_actions';
import NoteCreate from './note_create';

const mapStateToProps = ({session, note, notebook}) => {
  const notebookObj = notebook.entities;		
  return {
    notes: Object.keys(note.entities).map(id => note.entities[id]),
    currentUser: session.currentUser, 
    notebooks: Object.keys(notebookObj).map(id => notebookObj[id])
  };
};

const mapDispatchToProps = dispatch => ({
  createNote: note => dispatch(createNote(note)), 
  updateCurrentNote: note => dispatch(updateCurrentNote(note)), 
  fetchAllNotebooks: () => dispatch(fetchAllNotebooks()) 
});

export default connect( 
  mapStateToProps,
  mapDispatchToProps
)(NoteCreate);