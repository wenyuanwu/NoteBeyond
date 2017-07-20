```javascript 
{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createNote: {errors: ["body can't be blank"]}
  },
  notes: {
    1: {
      title: "Sample State",
      body: "is useful to plan",
      user_id: 1,
      notebook_id: 1
      tags_id: [1, 7, 14];
      archived: false;
    }
  },
  tags: {
  	1: {
          id: 1
          name: "Coding"
        }
  },
  notebooks: {
    1: {
      title: "Redux",
      user_id: 1,
    }
  },
}
```