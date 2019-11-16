export default class Offer {
  static async addNewOffer({ companyName, companyCity, jobTitle }, token) {
    const graphqlQuery = {
      query: `
        mutation {
          addNewOffer(userInput: {
            companyName: "${companyName}",
            companyCity: "${companyCity}",
            jobTitle: "${jobTitle}"
          }) {
            _id
            jobTitle
            companyCity
            companyName
          }
        }
      `
    };
    await fetch("http://localhost:8080/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      },
      body: JSON.stringify(graphqlQuery)
    });
  }

  static async getOfferList(token) {
    const graphqlQuery = {
      query: `
        query {
          getOfferList {
            jobOffers {
              _id
              companyCity
              jobTitle
              companyName
            }
          }
        }
      `
    };
    return fetch("http://localhost:8080/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      },
      body: JSON.stringify(graphqlQuery)
    })
      .then(res => {
        return res.json();
      })
      .catch(err => console.log(err));
  }
}
