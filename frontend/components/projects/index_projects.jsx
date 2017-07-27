import React from 'react';
import { Route } from 'react-router-dom';

import CreateProject from './create_project';
import ProjectIndexItem from './index_projects_items';
import { getAllProjects, updateProject } from '../../actions/project_actions';
import CreateProjectContainer from '../projects/create_project_container'
import TeamFormContainer from '../team/team_form_container';

class ProjectIndex extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.getAllProjects();
  }



  render () {
    const { projects } = this.props;

    return (
      <div className="project-index-wrapper">

        <section className="indices-section">
          <ul className="project-index">
            <div className="create-team-form-wrapper">
              <TeamFormContainer />
            </div>

            { projects && projects.map(project =>
              <ProjectIndexItem
                className="project-index-item" key={ project.id }
                project={ project }
                updateProject={ this.props.updateProject }
              />

            )}

            <div
              className="create-project-wrapper">
              <CreateProjectContainer />
            </div>
          </ul>
        </section>
      </div>
    )
  }
}

export default ProjectIndex;
