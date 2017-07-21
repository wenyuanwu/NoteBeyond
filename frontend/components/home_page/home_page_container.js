import { connect } from 'react-redux';
import HomePage from './home_page';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser, 
  };
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(HomePage);