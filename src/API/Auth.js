export const loginHandler = (login, password) => {
  const graphqlQuery = {
    query: `
          query {
            login(email: "${login}", password: "${password}") {
              token
              userId
              email
            }
          }
        `
  };
  return fetch("http://localhost:8080/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(graphqlQuery)
  })
    .then(res => {
      return res.json();
    })
    .catch(err => {});
};

export const registerHandler = (email, password) => {
  const graphqlQuery = {
    query: `
            mutation {
                createUser(userInput: {
                    email: "${email}",
                    password: "${password}"
                }) {
                    _id
                    email
                }
            }
          `
  };

  return fetch("http://localhost:8080/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(graphqlQuery)
  })
    .then(res => {
      return res.json();
    })
    .catch(err => {});
};

// Does not working. Yet.
export const resetPassword = email => {
  const graphqlQuery = {
    query: `
            query {
              resetPassword(email: "${email}") {
                  email
              }
            }
          `
  };

  return fetch("http://localhost:8080/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(graphqlQuery)
  })
    .then(res => {
      return res.json();
    })
    .catch(err => {
      // g("err", err);
    });
};
