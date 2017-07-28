// import { connect } from 'react-redux';
// import { createNotebook } from '../../actions/notebook_actions';
// import NotebookCreate from './notebook_create';

// const mapStateToProps = ({session, note}) => {	
//   return {
//     notes: Object.keys(note.entities).map(id => note.entities[id]),
//     currentUser: session.currentUser,
//     currentNote: note.currentNote
//   };
// };

// const mapDispatchToProps = dispatch => ({
//   createNotebook: notebook => dispatch(createNotebook(notebook))
// });

// export default connect( 
//   mapStateToProps,
//   mapDispatchToProps
// )(NotebookCreate);