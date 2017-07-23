import { connect } from 'react-redux';
import { fetchSingleNote, updateNote, updateCurrentNote } from '../../actions/note_actions';
import NoteEdit from './note_edit';

const mapStateToProps = ({ note }) => {	
  return {
    notes: Object.keys(note.entities).map(id => note.entities[id]),
    errors: note.errors,
    currentNote: note.currentNote
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSingleNote: id => dispatch(fetchSingleNote(id)),
  updateNote: note => dispatch(updateNote(note)),
  updateCurrentNote: note => dispatch(updateCurrentNote(note))
});

export default connect( 
  mapStateToProps,
  mapDispatchToProps
)(NoteEdit);