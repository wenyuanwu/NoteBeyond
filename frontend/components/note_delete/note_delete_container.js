import { connect } from 'react-redux';
import { deleteNote } from '../../actions/note_actions';
import NoteDelete from './note_delete';

const mapStateToProps = ({session, note}) => {	
  return {
    notes: Object.keys(note.entities).map(id => note.entities[id]),
    currentUser: session.currentUser,
    currentNote: note.currentNote
  };
};

const mapDispatchToProps = dispatch => ({
  deleteNote: note => dispatch(deleteNote(note))
});

export default connect( 
  mapStateToProps,
  mapDispatchToProps
)(NoteDelete);