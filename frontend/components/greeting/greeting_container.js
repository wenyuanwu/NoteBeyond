import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout, login } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session }, { location }) => ({
  currentUser: session.currentUser,
  location
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting));
