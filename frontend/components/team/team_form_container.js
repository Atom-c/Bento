import { connect } from 'react-redux';
import {
  createTeam
} from '../../actions/team_actions';
import TeamForm from './team_form';

const mapStateToProps = (state) => {
  return {
    teams: state.teams,
    session: state.session
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createTeam: (team) => dispatch(createTeam(team))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamForm);
