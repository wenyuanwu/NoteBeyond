import { connect } from 'react-redux';
import { createNote } from '../../actions/note_actions';
import NoteCreate from './note_create';

const mapStateToProps = ({session, note}) => {	
  return {
    notes: Object.keys(note.entities).map(id => note.entities[id]),
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  createNote: note => dispatch(createNote(note))
});

export default connect( 
  mapStateToProps,
  mapDispatchToProps
)(NoteCreate);