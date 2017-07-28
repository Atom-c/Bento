import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class CreateProject extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      creator_id: this.props.currentUser.id,
      team_id: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.setTitle = this.setTitle.bind(this);
  }

  setTitle(e) {
    e.preventDefault();
    const title = e.target.value ? e.target.value : "";
    this.setState({ title });
  }


  handleSubmit(e) {
    e.preventDefault();
    console.log("Team id: " + parseInt(this.props.match.params.teamId));

    console.log("Creator id: " + this.props.currentUser.id);

    console.log("Title: " + this.state.title);

    const newProject = {
      team_id: parseInt(this.props.match.params.teamId),
      creator_id: this.props.currentUser.id,
      title: this.state.title
    };

    this.props.createProject(newProject);

  }

  render () {
    return (
      <section className="create-container">
        <form
          className="new-form"
          onSubmit={ this.handleSubmit }
        >
          <h3>Create Project</h3>
          Title: <input
            type="text"
            value={ this.state.title }
            onChange={ this.setTitle }
          />
          <button>
            Bento
          </button>
        </form>
      </section>
    );
  }

}

export default withRouter(CreateProject);
