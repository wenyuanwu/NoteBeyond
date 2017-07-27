import { connect } from 'react-redux';
import HomePage from './home_page';
import { logout } from '../../actions/session_actions';
import { resetNotes, fetchAllNotes } from '../../actions/note_actions';
import { resetNotebook } from '../../actions/notebook_actions';

const mapStateToProps = ({ session, notebook }) => {
  return {
    currentUser: session.currentUser,
    notebook: notebook
  };
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  resetNotes: ()=> dispatch(resetNotes()), 
  resetNotebook: ()=> dispatch(resetNotebook()),
  fetchAllNotes: ()=> dispatch(fetchAllNotes())

});

export default connect(
  mapStateToProps, mapDispatchToProps
)(HomePage);