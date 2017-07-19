```js
{
  currentUser: {
    id: 1,
    username: "user",
    email: "email@email.com",
    password_digest: "digest",
    info: "I like to organize my food in bentos.",
    memberships: {1:, 2:}
    // a slice that points users to my teams, so if i have a slice i get all the memberships. elliot looking into this.
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createTask: {errors: ["body can't be blank"]}
  },
  teams: {
    1: {
      id: 1,
      team_name: "Awesome team",
      members: {

      }
    },
    1: {
      id: 1,
      team_name: "Awesome team",
      members: {

      }
    }
  }
  projects: {
    57: {
	    id: 57,
      title: "Project Proposal",
      description: "has a lot of moving parts"
      team_id: 1,
    }
  },
  tasks: {
    343: {
      id: 343,
      title: "Make plan",
      body: "Plan out all the little things",
      project_id: 343
    }
  }
}
```