import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import navigationBar from './nav_bar';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(navigationBar);
