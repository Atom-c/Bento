import { connect } from 'react-redux';
import TaskIndexItems from './index_tasks_items';

import {
  getAllTasksFromProjects,
  deleteTask,
  updateTask,
} from '../../actions/task_actions';

const mapStateToProps = (state, props) => {

  return {
    id: props.task.id,
    project_id: props.task.project_id,
    details: props.task.details,
    index: props.index,
    tasks: props.tasks,
    team_id: props.task.team_id,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAllTasksFromProjects: (teamId) => dispatch (
    getAllTasksFromProjects(teamId)
  ),
  updateTask: (task) => dispatch(updateTask(task)),
  deleteTask: (id) => dispatch(deleteTask(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskIndexItems);
