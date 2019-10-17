const initalState = {
  scores: [
    { name: 'John', scoring: 100 },
    { name: 'Jack', scoring: 92 },
    { name: 'Wilson', scoring: 87 },
    { name: 'Rambo', scoring: 57 },
    { name: 'Smith', scoring: 49 },
  ],
};

const Users = (state = initalState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default Users;
