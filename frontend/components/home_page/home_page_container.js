import { connect } from 'react-redux';
import HomePage from './home_page';
import { logout } from '../../actions/session_actions';
import { resetNotes } from '../../actions/note_actions';

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  resetNotes: ()=> dispatch(resetNotes())
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(HomePage);