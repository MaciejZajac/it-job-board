import { ConstantsEnum } from "../constants/Constants";

export default class AuthConnector {
  static async loginHandler(login, password) {
    const graphqlQuery = {
      query: `
          query {
            login(email: "${login}", password: "${password}") {
              token
              userId
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
      .catch(err => console.log(err));
  }

  static async registerHandler(email, password) {
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
      .catch(err => console.log("err", err));
  }

  // Does not working. Yet.
  static async resetPassword(email) {
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
        console.log("err", err);
      });
  }
}
