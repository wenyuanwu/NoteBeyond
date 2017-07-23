import { connect } from 'react-redux';
import { updateNote, deleteNote } from '../../actions/note_actions';
import NoteEdit from './note_edit';

const mapStateToProps = ({ note }) => {	
  return {
    errors: note.errors,
    currentNote: note.currentNote
  };
};

const mapDispatchToProps = dispatch => ({
  updateNote: note => dispatch(updateNote(note)),
  deleteNote: note => dispatch(deleteNote(note))
});

export default connect( 
  mapStateToProps,
  mapDispatchToProps
)(NoteEdit);